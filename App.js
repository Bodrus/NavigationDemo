
import { SafeAreaView, StatusBar } from 'react-native';
import React from 'react';
import { CategoryGridTile } from './src/components/CategoryGridTile';


export default function App() {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'}/>
      <CategoryGridTile />
    </SafeAreaView>
  );
}
