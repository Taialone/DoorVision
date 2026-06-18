import React from 'react';
import { SafeAreaView } from 'react-native';
import HomeScreen from './screens/home/HomeScreen';

function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HomeScreen />
    </SafeAreaView>
  );
}

export default App;
