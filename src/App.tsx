import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import { defaultTheme } from './themes/defaultTheme';
import { Navbar } from './components/Navbar/Navbar';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Navbar />
    </ThemeProvider>
  );
};

export default App;

