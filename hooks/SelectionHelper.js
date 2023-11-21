import { useCallback, useEffect, useState } from "react";

import { LAT_TEST, LON_TEST } from '@env';

import WeatherService from '../services/Weather.service';

const default_lat = LAT_TEST;
const default_lon = LON_TEST;

import * as Location from 'expo-location';

const SelectionHelper = () => {

    const [ loading, setLoading ] = useState(false);
    const [ hasError, setHasError ] = useState(false);

    const [ forecastResponse, setForecastResponse ] = useState(null);

    const [ latLon, setLatLon ] = useState(null);
    const [ location, setLocation ] = useState(null);

    const [ selectedDay, setSelectedDay ] = useState(null);

    useEffect(() => {
        Location.requestForegroundPermissionsAsync().then(
          resp => {
            console.log(resp);
            const { status } = resp;
            if (status !== 'granted') {
              useDefaultLocation();
            } else {
              searchCurrentPosition();
            }          
          }
        ).catch(error => {
          console.error('Erro ao requisitar permissão de localização para o usuário', error);
          useDefaultLocation();
        });
    }, []);

    const useDefaultLocation = () => {
      console.log('usando localização padrão...');
      setLatLon({lat: default_lat, lon: default_lon});
    }

    const searchCurrentPosition = () => {
      console.log('Carregando posição do usuário...');
      Location.getLastKnownPositionAsync({ timeInterval: 5000, accuracy: Location.Accuracy.Highest }).then(
        currentLocation => {
          handleLocation(currentLocation);
        }
      ).catch(error => {
        console.error('Erro encontrado ao usar localização do usuário', error);
        useDefaultLocation();
      })
    }

    const handleLocation = (currentLocation) => {
      console.log(currentLocation);
      const { latitude, longitude } = currentLocation.coords;
      setLocation(null);
      console.log('usando localização do usuario: ', latitude, longitude);
      setLatLon({lat: latitude, lon: longitude });
    }

    useEffect(() => {
        if (latLon)
            onLoadForecast();
    }, [latLon]);

    const onLoadForecast = useCallback(() => {
        setLoading(true);
        const { lat, lon } = latLon;

        WeatherService.getForecast(lat, lon).then(
          resp => {
            setHasError(false);
            const { data } = resp;
            setForecastResponse(data);
            if (!location) {
              setLocation(data.location);
            }
            const day = data.forecast.forecastday[0];
            onSelectDay(day);
          }
        ).catch(err => {
          console.error(err);
          setHasError(true);
          setForecastResponse(null);
        }).
        finally(() => {
          setLoading(false);
        });
    }, [ latLon ]);

    const onSelectLocation = (selectedLocation) => {
        const { coordinates } = selectedLocation.geometry;
        setLatLon({ lat: coordinates[1], lon: coordinates[0] });
        const { properties } = selectedLocation;
        const locationInfo = { name: properties.formatted, region: properties.state, country: properties.country };
        setLocation(locationInfo);
    }

    const onSelectDay = (day) => {
        setSelectedDay(day);
    }

    return {
        loading,
        forecastResponse,
        location,
        selectedDay,
        onSelectLocation,
        onSelectDay,
        onLoadForecast, 
        hasError
    }
    
}

export default SelectionHelper;