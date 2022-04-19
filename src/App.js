import React from 'react';

import { RecoilRoot } from 'recoil';

import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { SnackbarProvider } from 'notistack';

import withErrorHandler from 'errorHandling';
import ErrorBoundaryFallback from 'errorHandling/Fallbacks';

import Layout from 'Layouts/MainLayout';
import Fb from 'components/Fb';

import { BrowserRouter as Router } from 'react-router-dom';

const theme = createTheme();

function App() {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <Fb style={{ flexDirection: 'column' }}>
          <CssBaseline />
          <Router>
            <SnackbarProvider maxSnack={3}>
              <Layout />
            </SnackbarProvider>
          </Router>
        </Fb>
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default withErrorHandler(App, ErrorBoundaryFallback);
