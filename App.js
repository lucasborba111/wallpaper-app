import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./Home";
import Hariel from "./Hariel";
import Kevin from "./Kevin";
import Poze from "./Poze";
import Ryansp from "./Ryansp";
import Pedrinho from "./Pedrinho"


const Stack = createStackNavigator(); 

export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Wallpapers" component={Home}
      options={{
        title: 'Wallpapers',
        headerStyle: {
        backgroundColor: '#8a2be2',
        height: 45,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        alignSelf: 'center',
        fontFamily: 'monospace',
      },
    }}/>
      <Stack.Screen name="Hariel" component={Hariel}
      options={{
        title: 'Wallpapers',
        headerStyle: {
        backgroundColor: '#8a2be2',
        height: 45,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        alignSelf: 'center',
        marginRight: 55,
        fontFamily: 'monospace',
      },
    }}/>
    <Stack.Screen name="Kevin" component={Kevin}
      options={{
        title: 'Wallpapers',
        headerStyle: {
        backgroundColor: '#8a2be2',
        height: 45,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        alignSelf: 'center',
        marginRight: 55,
        fontFamily: 'monospace',
      },
    }}/>
        <Stack.Screen name="Poze" component={Poze}
      options={{
        title: 'Wallpapers',
        headerStyle: {
        backgroundColor: '#8a2be2',
        height: 45,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        alignSelf: 'center',
        marginRight: 55,
        fontFamily: 'monospace',
      },
    }}/>
            <Stack.Screen name="Ryansp" component={Ryansp}
      options={{
        title: 'Wallpapers',
        headerStyle: {
        backgroundColor: '#8a2be2',
        height: 45,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        alignSelf: 'center',
        marginRight: 55,
        fontFamily: 'monospace',
      },
    }}/>
            <Stack.Screen name="Pedrinho" component={Pedrinho}
      options={{
        title: 'Wallpapers',
        headerStyle: {
        backgroundColor: '#8a2be2',
        height: 45,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        alignSelf: 'center',
        marginRight: 55,
        fontFamily: 'monospace',
      },
    }}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}