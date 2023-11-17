import { useEffect, useState } from "react";

import { LAT_TEST, LON_TEST } from '@env';

import WeatherService from '../services/Weather.service';

const default_lat = LAT_TEST;
const default_lon = LON_TEST;

const SelectionHelper = () => {

    const [ loading, setLoading ] = useState(false);
    const [ forecastResponse, setForecastResponse ] = useState(null);

    const [ latLon, setLatLon ] = useState({lat: default_lat, lon: default_lon});
    const [ location, setLocation ] = useState(null);

    const [ selectedDay, setSelectedDay ] = useState(null);

    useEffect(() => {
        if (latLon)
            onLoadForecast();
    }, [latLon]);

    const onLoadForecast = () => {
        setLoading(true);
        const { lat, lon } = latLon;
        
        WeatherService.getForecast(lat, lon).then(
          resp => {
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
          setForecastResponse(null);
        }).
        finally(() => {
          setLoading(false);
        });
    }

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
        onSelectDay
    }
    
}

export default SelectionHelper;