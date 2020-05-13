import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { Container } from './styles';
import Main from './page/Main';

const Stack = createStackNavigator();
const src = ({ themeSwitcher }) => {
  const Home = () => <Main themeSwitcher={themeSwitcher} />;
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Providers"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default src;
