import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { changeTheme } from '../store/themeSlice';

const ContactScreen = () => {
  const theme = useSelector((state) => state.theme.theme);  
  const dispatch = useDispatch();

  const handleThemeToggle = () => {
    dispatch(changeTheme());  
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
        Contact Screen
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

export default ContactScreen;