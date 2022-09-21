import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
<<<<<<< HEAD
import { BrowserRouter } from 'react-router-dom';
=======
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

>>>>>>> cd5d7495fb6deb76d0b77524223714ffd906b939
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);

const theme = createTheme({
  palette: {
    primary: {
      main: '#219EBC',
      dark: '#023047',
      light: '#8ECAE6',
    },
    secondary: {
      main: '#FFB703',
      dark: '#FB8500',
    },
  },
});

root.render(
<<<<<<< HEAD
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
=======
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
>>>>>>> cd5d7495fb6deb76d0b77524223714ffd906b939
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
