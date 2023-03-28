import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './assets/routes/index';
import { useFonts, Montserrat_400Regular } from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';
import { loadAsync } from 'expo-font';

export default function App() {
  let [fontsLoaded] = useFonts({ Montserrat_400Regular });

  const loadFont = async () => {
    await loadAsync({
      Montserrat_400Regular: require('./assets/fonts/Montserrat-VariableFont_wght.ttf'),
    });
    setFontLoaded(true);
  }

  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={loadFont}
        onFinish={() => {}}
        onError={(error) => console.warn(error)}
      />
    );
  }

  return (
    <NavigationContainer>
      <StatusBar
      backgroundColor = '#A82CBF'
      barStyle = 'light-content'
      />
      <Routes/>
    </NavigationContainer>
  );
};