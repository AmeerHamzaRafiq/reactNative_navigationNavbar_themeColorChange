import React from 'react';
import { View, Text, TouchableOpacity, Switch, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { changeTheme } from '../store/themeSlice';
import { useNavigation } from '@react-navigation/native';

const Navbar = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);
  const navigation = useNavigation();

  const handleThemeToggle = () => {
    dispatch(changeTheme());
  };

  return (
    <View style={[styles.navbar, { backgroundColor: theme === 'dark' ? '#222' : '#f8f8f8' }]}>
      <View style={styles.navLeft}>
        <Text style={[styles.navText, { color: theme === 'dark' ? '#fff' : '#000' }]}>HAX</Text>
      </View>

      <View style={styles.navRight}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={[styles.navItem, { color: theme === 'dark' ? '#fff' : '#000' }]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('About')}>
          <Text style={[styles.navItem, { color: theme === 'dark' ? '#fff' : '#000' }]}>About</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Contact')}>
          <Text style={[styles.navItem, { color: theme === 'dark' ? '#fff' : '#000' }]}>Contact</Text>
        </TouchableOpacity>

        <Switch
          value={theme === 'dark'}
          onValueChange={handleThemeToggle}
          thumbColor={theme === 'dark' ? '#f4f3f4' : '#f4f3f4'}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          style={styles.switch}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: 60,
    marginTop: 38,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  navLeft: {
    flex: 1,
  },
  navText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  navRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  navItem: {
    marginHorizontal: 10,
    fontSize: 16,
  },
  switch: {
    marginLeft: 10,
  },
});

export default Navbar;
