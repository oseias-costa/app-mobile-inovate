import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StyleSheet } from 'react-native';
import { Auth } from './components/context/Auth';
import { AuthProvider } from './components/context/AuthContext';

const MenuNav = createBottomTabNavigator()

export default function App() {
  return (
    <AuthProvider>
      <Auth />
    </AuthProvider>
  );
}

const sombra = StyleSheet.create({
  shadow:{
    shadowColor: '#7F5DF0',
    textShadowOffset : {
      width: 2,
      height: 10
    },
    shadowOpacity: 0.75,
    shadowRadius: 6.5,
    elevation: 5
  }
})
