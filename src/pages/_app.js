import '@/styles/globals.css'
import {createTheme, ThemeProvider} from "@mui/material";
import {colors} from "@/config/colors";
const theme = createTheme({
  palette: {
    typography: {
      fontFamily: [
        'Roboto',
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
  },
});

export default function App({ Component, pageProps }) {
  return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
  );
}
