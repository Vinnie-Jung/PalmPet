import 'react-native-gesture-handler';
import React, { useState, useEffect, useCallback } from 'react';
import { StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './assets/routes/index';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  // Carregamento da fonte
  useEffect(() => {
    (async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({ Montserrat_400Regular, Montserrat_700Bold });
      } catch {
        // handle error
      } finally {
        setAppIsReady(true);
      }
    })();
  }, []);

  const onLayout = useCallback(() => {
    if (appIsReady) {
      SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View onLayout = {onLayout} style = {{ flex: 1 }}>
      <NavigationContainer>
        <StatusBar
        backgroundColor = '#A82CBF'
        barStyle = 'light-content'
        />
        <Routes/>
    </NavigationContainer>
    </View>
  );
};