import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Home} from './src/pages/Home';
import {Details} from './src/pages/Details';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Repositorios"
          component={Home}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen
          name="Details"
          component={Details}
          options={{
            title: `Detalhes`,
          }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
