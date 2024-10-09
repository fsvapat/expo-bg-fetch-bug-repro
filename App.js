import { Text, SafeAreaView } from 'react-native';
import { useState, useEffect } from 'react';
import * as BackgroundFetch from 'expo-background-fetch';

export default function App() {
  const [error, setError] = useState('No Error');

  useEffect(() => {
    BackgroundFetch.unregisterTaskAsync('SOME_TASK').catch((e) => {
      setError('An error happaned and was caught');
    });
  }, []);

  return (
    <SafeAreaView>
      <Text>{error}</Text>
    </SafeAreaView>
  );
}
