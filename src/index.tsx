import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";

import App from "./App";
import { store, history } from "./logic/redux/store";
import * as serviceWorker from "./serviceWorker";
import { defaultTheme } from "./theme/customChakraTheme";
import Fonts from "./theme/fonts";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={defaultTheme}>
        <Fonts />
        <App history={history} />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
