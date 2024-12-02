import React from "react";
import { View, Text, Switch, StyleSheet, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { changeTheme } from "../store/themeSlice";
export default function HomeScreen() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);
  const navigation = useNavigation();

  const handleThemeToggle = () => {
    dispatch(changeTheme());
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme === "dark" ? "#000" : "#fff" },
      ]}
    >
      <Text
        style={[styles.text, { color: theme === "dark" ? "#fff" : "#000" }]}
      >
        Home Screen
      </Text>
      <Text style={styles.toggleButton} onPress={handleThemeToggle}>
        Toggle Theme
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
  },
  toggleButton: {
    fontSize: 18,
    color: "blue",
    marginTop: 20,
  },
});
