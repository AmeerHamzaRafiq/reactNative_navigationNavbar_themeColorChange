import { createSlice } from '@reduxjs/toolkit';

// Initial state
const initialState = {
  theme: "light",
};

// Create a slice for the theme
export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    // Toggle theme between 'light' and 'dark'
    changeTheme: (state) => {
      state.theme = state.theme === "dark" ? "light" : "dark";
    },
  },
});

// Export the action for toggling the theme
export const { changeTheme } = themeSlice.actions;

// Export the reducer to be used in the store
export default themeSlice.reducer;
