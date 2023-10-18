import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native';
import ForecastScreen from './screens/ForecastScreen';
import LoadingScreen from './screens/LoadingScreen';
import ErrorScreen from './screens/ErrorScreen';
import WeatherService from './services/Weather.service';

import { LAT_TEST, LON_TEST } from '@env';
import SearchScreen from './screens/SearchScreen';

const default_lat = LAT_TEST;
const default_lon = LON_TEST;

export default function App() {

  const [ loading, setLoading ] = useState(false);
  const [ forecastResponse, setForecastResponse ] = useState(null);

  const [ latLon, setLatLon ] = useState({lat: default_lat, lon: default_lon});
  const [ location, setLocation ] = useState(null);

  const [ showSearch, setShowSearch ] = useState(false);

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
      }
    ).catch(err => {
      setForecastResponse(null);
    }).
    finally(() => {
      setLoading(false);
    })
  }

  const onShowSearch = () => {
    setShowSearch(true);
  }

  const onHideSearch = () => {
    setShowSearch(false);
  }

  const onSelectLocation = (selectedLocation) => {
    onHideSearch();
    const { coordinates } = selectedLocation.geometry;
    setLatLon({ lat: coordinates[1], lon: coordinates[0] });
    const { properties } = selectedLocation;
    const locationInfo = { name: properties.formatted, region: properties.state, country: properties.country };
    setLocation(locationInfo);
  }

  let content = <ForecastScreen forecastResponse={forecastResponse} location={location} onShowSearch={onShowSearch} />

  if (loading)
    content = <LoadingScreen/>
  else if (showSearch)
    content = <SearchScreen onSelect={onSelectLocation} onHide={onHideSearch} />
  else if (!forecastResponse)
    content = <ErrorScreen onPressRetry={onLoadForecast} onPressSearch={onShowSearch} />

  return (
    <>
      <StatusBar style={showSearch ? 'light' : 'auto'} />
      <ImageBackground style={styles.mainView} imageStyle={styles.background}
          source={require('./assets/images/background.jpg')} resizeMode='cover'>
        <SafeAreaView style={styles.container}>
          { content }
        </SafeAreaView>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    opacity: 0.35
  }
});
