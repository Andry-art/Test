import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Screen from './src/screen/Screen';
import {Provider} from 'react-redux';
import {store} from './src/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Screen />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
