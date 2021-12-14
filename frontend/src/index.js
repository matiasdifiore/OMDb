import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react"
import "./index.css";
import "bulma/css/bulma.min.css";
import store from "./state/store";
import { Provider } from "react-redux";

const app = (
  <BrowserRouter>
  <ChakraProvider>
    <Provider store={store}>
      <App />
    </Provider>
    </ChakraProvider>
  </BrowserRouter>
);

const target = document.getElementById("root");

ReactDOM.render(app, target);
