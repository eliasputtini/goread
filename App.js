import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider as ReduxProvider} from 'react-redux';
import {store} from './src/redux/store';

import {Home} from './src/pages/Home';
import {Details} from './src/pages/Details';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Repositorios"
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Detalhes" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  );
};

export default App;
