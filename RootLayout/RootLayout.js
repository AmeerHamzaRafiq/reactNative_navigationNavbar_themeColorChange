import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store, setTheme } from '../store/themeSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Prevent splash screen from hiding until theme is loaded
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  useEffect(() => {
    const loadTheme = async () => {
      const storedTheme = await AsyncStorage.getItem('theme');
      if (storedTheme) {
        // Dispatch the theme to Redux if found in AsyncStorage
        store.dispatch(setTheme(storedTheme));
      } else {
        // Default to light theme if no theme is found
        store.dispatch(setTheme('light'));
      }
      SplashScreen.hideAsync(); // Hide splash screen after theme is loaded
    };
    
    loadTheme();
  }, []);

  return (
    <Provider store={store}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </Provider>
  );
}

