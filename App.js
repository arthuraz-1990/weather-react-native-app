import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ForecastScreen from './screens/ForecastScreen';
import LoadingScreen from './screens/LoadingScreen';
import ErrorScreen from './screens/ErrorScreen';
import WeatherService from './services/Weather.service';

import { LAT_TEST, LON_TEST } from '@env';

export default function App() {

  const [ loading, setLoading ] = useState(false);
  const [ forecastResponse, setForecastResponse ] = useState(null);

  useEffect(() => {
    onLoadForecast();
  }, []);

  const onLoadForecast = () => {
    setLoading(true);
    const lat = LAT_TEST;
    const lon = LON_TEST;
    WeatherService.getForecast(lat, lon).then(
      resp => {
        const { data } = resp;
        setForecastResponse(data);
        
      }
    ).catch(err => {
      setForecastResponse(null);
    }).
    finally(() => {
      setLoading(false);
    })
  }

  let content = <ForecastScreen forecastResponse={forecastResponse} />

  if (loading)
    content = <LoadingScreen/>
  else if (!forecastResponse)
    content = <ErrorScreen onPressRetry={onLoadForecast} />

  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.container}>
        { content }
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
