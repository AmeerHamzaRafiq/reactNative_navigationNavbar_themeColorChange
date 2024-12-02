import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  theme: 'light',  // Default theme
  themeColors: {
    light: {
      textColor: '#000',
      linkColor: 'blue',
      backgroundColor: '#fff',
      navbarColor: '#f8f8f8',
    },
    dark: {
      textColor: '#fff',
      linkColor: '#81b0ff',
      backgroundColor: '#000',
      navbarColor: '#222',
    },
  },
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state) => {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;