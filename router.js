import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FirstScreen from './src/Screens/FirstScreen/FirstScreen';
import MainScreen from './src/Screens/SecondScreen/SecondScreen';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home Screen"
        component={FirstScreen}
        options={{
          title: 'My home',
          headerStyle: {
            backgroundColor: '#496E58',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="Main Screen"
        component={MainScreen}
        options={{
          title: 'Main Screen',
          headerStyle: {
            backgroundColor: '#496E58',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default MyStack;
