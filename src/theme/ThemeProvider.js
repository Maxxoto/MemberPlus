import React from 'react';

import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { createTheme, adaptV4Theme } from '@mui/material/styles';

import useTheme from 'store/theme';

import { themes } from 'config';

function CustomThemeProvider({ children }) {
  const [theme] = useTheme();
  console.log(theme);
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={createTheme(adaptV4Theme(themes[theme]))}>{children}</ThemeProvider>
    </StyledEngineProvider>
  );
}

export default CustomThemeProvider;
