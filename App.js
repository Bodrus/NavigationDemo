
import { StatusBar } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { CategoriesScreen } from './src/screens/CategoriesScreen';
import { MealsOverviewScreen } from './src/screens/MealsOverviewScreen';
import { PDP } from './src/screens/PDP';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <>
      <StatusBar barStyle={'dark-content'}/>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={() => ({
            headerStyle: { backgroundColor: 'papayawhip' },
            headerTintColor: 'red',
            contentStyle: {
              backgroundColor: '#523636'
            }
          })}
        >
          <Stack.Screen
            name='MealsCategories'
            component={CategoriesScreen}
            options={{
              title: 'Meals Categories'
            }}
          />
          <Stack.Screen name='MealsOverview' component={MealsOverviewScreen} />
          <Stack.Screen name='PDP' component={PDP} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
