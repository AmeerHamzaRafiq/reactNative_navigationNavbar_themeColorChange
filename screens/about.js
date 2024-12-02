// screens/AboutScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { changeTheme } from '../store/themeSlice';

const AboutScreen = () => {
  const theme = useSelector((state) => state.theme.theme);  // Get the theme from Redux store
  const dispatch = useDispatch();

  const handleThemeToggle = () => {
    dispatch(changeTheme());  // Toggle theme on button press
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme === 'dark' ? '#000' : '#fff' },
      ]}
    >
      <Text
        style={[
          styles.text,
          { color: theme === 'dark' ? '#fff' : '#000' },
        ]}
      >
        About Screen
      </Text>
      <Text
        style={styles.toggleButton}
        onPress={handleThemeToggle} 
      >
        Toggle Theme
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
  toggleButton: {
    fontSize: 18,
    color: 'blue',
    marginTop: 20,
  },
});

export default AboutScreen;
