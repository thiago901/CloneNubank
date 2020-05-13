import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import lightTheme from './themes/light';
import darkTheme from './themes/dark';
import Routes from './routes';

function App() {
  const [dark, setDark] = useState(false);
  return (
    <ThemeProvider theme={dark ? darkTheme : lightTheme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={dark ? darkTheme.background : lightTheme.background}
      />
      <Routes
        themeSwitcher={{
          onDarkChangeMode: () => setDark(!dark),
          darkModeValue: dark,
        }}
      />
    </ThemeProvider>
  );
}

export default App;
