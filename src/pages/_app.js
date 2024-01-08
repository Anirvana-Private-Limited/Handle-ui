import React from "react";
import { Provider } from "react-redux";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { CacheProvider } from "@emotion/react";
import { Inter } from "next/font/google";
import "chart.js/auto";

import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

// Note: Remove the following line if you want to disable the API mocks.
import "../mocks";

import "../vendor/perfect-scrollbar.css";
import "animate.css/animate.min.css";

import "../i18n";
import createTheme from "../theme";
import { ThemeProvider } from "../contexts/ThemeContext";
import useTheme from "../hooks/useTheme";
import { store } from "../redux/store";
import createEmotionCache from "../utils/createEmotionCache";

// import { AuthProvider } from "../contexts/JWTContext";
// import { AuthProvider } from "../contexts/FirebaseAuthContext";
import { AuthProvider } from "../contexts/Auth0Context";
// import { AuthProvider } from "../contexts/CognitoContext";

const inter = Inter({ subsets: ["latin"] });

const clientSideEmotionCache = createEmotionCache();

function App({ Component, emotionCache = clientSideEmotionCache, pageProps }) {
  const { theme } = useTheme();

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <CacheProvider value={emotionCache}>
        <HelmetProvider>
          <Helmet
            titleTemplate="%s | Mira"
            defaultTitle="Mira - React Material Admin Dashboard"
          />
          <Provider store={store}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <MuiThemeProvider theme={createTheme(theme)}>
                <AuthProvider>
                  {getLayout(<Component {...pageProps} />)}
                </AuthProvider>
              </MuiThemeProvider>
            </LocalizationProvider>
          </Provider>
        </HelmetProvider>
      </CacheProvider>
    </>
  );
}

const withThemeProvider = (Component) => {
  const AppWithThemeProvider = (props) => {
    return (
      <ThemeProvider>
        <Component {...props} />
      </ThemeProvider>
    );
  };
  AppWithThemeProvider.displayName = "AppWithThemeProvider";
  return AppWithThemeProvider;
};

export default withThemeProvider(App);
