import '@/styles/globals.css'
import {createTheme, ThemeProvider} from "@mui/material";
import Head from 'next/head'
import {colors} from "@/config/colors";

const theme = createTheme({
  palette: {
    typography: {
      fontFamily: [
        'Lato',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
    primary: {
      main: colors.main,
    },
    secondary: {
      main: colors.second,
    },
    neutral:{
      main:colors.grey
    },
    error:{
      main:colors.red
    }
  },
});

export default function App({ Component, pageProps }) {
  return (
      <ThemeProvider theme={theme}>
        <>
          <Head>
            <title>Multi Cloud</title>
          </Head>
          <Component {...pageProps} />
        </>
      </ThemeProvider>
  );
}
