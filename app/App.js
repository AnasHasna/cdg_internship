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

const queryClient = new QueryClient();

export default function App() {
  return (
    <React.Fragment>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <NavigationContainer>
            {/* <Login /> */}
            <Welcome />
          </NavigationContainer>
        </Provider>
      </QueryClientProvider>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
