import { StatusBar } from 'expo-status-bar';
import { useCallback, useEffect, useState } from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, View } from 'react-native';
import ForecastScreen from './screens/ForecastScreen';
import LoadingScreen from './screens/LoadingScreen';
import ErrorScreen from './screens/ErrorScreen';

import SearchScreen from './screens/SearchScreen';
import HoursScreen from './screens/HoursScreen';
import SelectDayScreen from './screens/SelectDayScreen';
import Footer from './components/element/Footer';
import * as SplashScreen from 'expo-splash-screen';

import { useFonts } from 'expo-font';
import { Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import SelectionHelper from './hooks/SelectionHelper';

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

const defaultBackground = getBackground();

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [ fontsLoaded, fontError ] = useFonts({
    Inter_400Regular, Inter_700Bold
  });

  const selectionHelper = new SelectionHelper();

  const { loading, location, selectedDay, forecastResponse } = selectionHelper;

  const [ showSearch, setShowSearch ] = useState(false);

  const [ showHour, setShowHour ] = useState(false);
  const [ showDays, setShowDays ] = useState(false);

  const [ background, setBackground ] = useState(defaultBackground);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);


  const onShowSearch = () => {
    setShowSearch(true);
  }

  const onHideSearch = () => {
    setShowSearch(false);
  }

  useEffect(() => {
    if (selectedDay)
      setBackground(getBackground(selectedDay));
    
  }, [selectedDay])

  const onSelectDay = (day) => {
    selectionHelper.onSelectDay(day);
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
    selectionHelper.onSelectLocation(selectedLocation);
  }

  if (!fontsLoaded && !fontError) {
    return null;
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
      paddingHorizontal: 16,
      paddingTop: 16
    }

  return (
    <>
      <StatusBar style={showSearch ? 'light' : 'auto'} />
      <ImageBackground style={styles.mainView} imageStyle={styles.background}
          source={background} resizeMode='cover'>
        <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
          <View style={[styles.container, marginStyle]}>
            { content }
          </View>
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
    justifyContent: 'center',
    width: '100%'
  },
  background: {
    opacity: 0.7
  }
});
