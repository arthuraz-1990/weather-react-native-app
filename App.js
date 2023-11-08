import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, Text } from 'react-native';
import ForecastScreen from './screens/ForecastScreen';
import LoadingScreen from './screens/LoadingScreen';
import ErrorScreen from './screens/ErrorScreen';
import WeatherService from './services/Weather.service';

import { LAT_TEST, LON_TEST } from '@env';
import SearchScreen from './screens/SearchScreen';
import HoursScreen from './screens/HoursScreen';
import SelectDayScreen from './screens/SelectDayScreen';
import Footer from './components/element/Footer';

const baseBackgroundSrc = './assets/images/';

const images = {
  default: require(`${baseBackgroundSrc}background.jpg`),
  cloudy: require(`${baseBackgroundSrc}cloudy-bkg.jpg`),
  rainy: require(`${baseBackgroundSrc}rainy-bkg.jpg`),
  sunny: require(`${baseBackgroundSrc}sunny-bkg.jpg`)
}

const getBackground = (selectedDay) => {
  let iconName = 'default';
  if (selectedDay) {
      let condition = selectedDay.day.condition.text.toLowerCase();
      if (condition.includes('chuv'))
        iconName = 'rainy';
      else if (condition.includes('sol'))
        iconName = 'sunny';
      else
        iconName = 'cloudy'
  }
  return images[iconName];
}

const default_lat = LAT_TEST;
const default_lon = LON_TEST;
const defaultBackground = getBackground();

export default function App() {

  const [ loading, setLoading ] = useState(false);
  const [ forecastResponse, setForecastResponse ] = useState(null);

  const [ latLon, setLatLon ] = useState({lat: default_lat, lon: default_lon});
  const [ location, setLocation ] = useState(null);

  const [ showSearch, setShowSearch ] = useState(false);

  const [ showHour, setShowHour ] = useState(false);
  const [ showDays, setShowDays ] = useState(false);

  const [ selectedDay, setSelectedDay ] = useState(null);

  const [ background, setBackground ] = useState(defaultBackground);

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
    })
  }

  const onShowSearch = () => {
    setShowSearch(true);
  }

  const onHideSearch = () => {
    setShowSearch(false);
  }

  const onSelectDay = (day) => {
    setSelectedDay(day);
    setBackground(getBackground(day));
    onReturn();
  }

  const onShowHour = () => {
    setShowHour(true);
  }

  const onShowDays = () => {
    setShowDays(true);
  }

  const onReturn = () => {
    setShowHour(false);
    setShowDays(false);
  }

  const onSelectLocation = (selectedLocation) => {
    onHideSearch();
    const { coordinates } = selectedLocation.geometry;
    setLatLon({ lat: coordinates[1], lon: coordinates[0] });
    const { properties } = selectedLocation;
    const locationInfo = { name: properties.formatted, region: properties.state, country: properties.country };
    setLocation(locationInfo);
  }

  let content = <ForecastScreen selectedDay={selectedDay} location={location} onShowSearch={onShowSearch} 
    onShowDays={onShowDays} onShowHour={onShowHour} />

  if (loading)
    content = <LoadingScreen/>
  else if (forecastResponse) {
    if (showSearch) {
      content = <SearchScreen onSelect={onSelectLocation} onHide={onHideSearch} />
    } else if (showHour) {
      content = <HoursScreen location={location} selectedDay={selectedDay} onReturn={onReturn}/>
    } else if (showDays) {
      content = <SelectDayScreen location={location} forecastResponse={forecastResponse} 
        selectedDay={selectedDay} onReturn={onReturn} onSelectDay={onSelectDay} />
    } 
  } else {
    content = <ErrorScreen onPressRetry={onLoadForecast} onPressSearch={onShowSearch} />
  }

  const marginStyle = showSearch || loading ?
    {} : {
      marginHorizontal: 16,
      marginTop: 16
    }

  return (
    <>
      <StatusBar style={showSearch ? 'light' : 'auto'} />
      <ImageBackground style={styles.mainView} imageStyle={styles.background}
          source={background} resizeMode='cover'>
        <SafeAreaView style={[styles.container, marginStyle]}>
          { content }
          { !showSearch && !loading && <Footer />}
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
    justifyContent: 'center'
  },
  background: {
    opacity: 0.7
  }
});
