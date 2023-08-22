import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { StyledContainer } from './components/styles';
import Login from './screens/Login';
import { QueryClient, QueryClientProvider } from 'react-query';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import store from './redux/store';
import { Provider } from 'react-redux';
import Welcome from './screens/Welcome';
import Register from './screens/Register';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ForgotPassword from './screens/ForgotPassword';
import Home from './screens/Home';
import Settings from './screens/Settings';

const queryClient = new QueryClient();
const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <React.Fragment>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
              <Stack.Screen name="Register" options={{ headerShown: false }} component={Register} />
              <Stack.Screen name="Home" options={{ headerShown: false }} component={Home} />
              <Stack.Screen name="ForgotPassword" options={{ headerShown: false }} component={ForgotPassword} />
            </Stack.Navigator>
            {/* <Drawer.Navigator initialRouteName="Home">
              <Drawer.Screen name="Home" options={{ headerShown: false }} component={Home} />
              <Drawer.Screen name="Settings" options={{ headerShown: false }} component={Settings} />
            </Drawer.Navigator> */}
          </NavigationContainer>
        </Provider>
      </QueryClientProvider>
    </React.Fragment>
  );
}
