import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './assets/routes/index';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
      backgroundColor = '#2E2E2E'
      barStyle = 'light-content'
      />
      <Routes/>
    </NavigationContainer>
  );
};