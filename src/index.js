import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
// import reducers from "./store/reducers";
import thunk from "redux-thunk";
import * as serviceWorker from "./serviceWorker";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core";
import { blue, purple, blueGrey } from "@material-ui/core/colors";

const store = createStore(applyMiddleware(thunk));

const textPrimary = blueGrey[500];
const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: purple
  },
  typography: {
    h2: {
      color: textPrimary
    },
    body1: {
      color: textPrimary
    }
  }
});

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
