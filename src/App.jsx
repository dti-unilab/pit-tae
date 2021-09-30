import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Routes from './routes/Routes';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {

  const theme =createTheme({
    status: {
      danger: '#e53e3e',
    },
    palette: {
      primary: {
        main: '#0971f1',
        darker: '#053e85',
      },
      neutral: {
        main: '#64748B',
        contrastText: '#fff',
      },
    },
});

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Header/>
      <Routes/>
      <Footer/>
    </ThemeProvider>
  );
}

export default App;