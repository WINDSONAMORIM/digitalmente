import React, { Fragment } from 'react';
import { Home } from './pages/home';
import { ThemeProvider } from '@mui/material';
import { LightTheme } from './themes/Light';


function App() {
  return (
    <ThemeProvider theme={LightTheme}>
      <Fragment>
        <Home />
      </Fragment>
    </ThemeProvider>
  );
}

export default App;
