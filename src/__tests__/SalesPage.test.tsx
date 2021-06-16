import { ChakraProvider } from "@chakra-ui/react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";

import { store, history } from "../logic/redux/store";
import { defaultTheme } from "../theme/customChakraTheme";
import { Sales } from "../components/Sales/Sales";

describe("Render once page", () => {
  test("Render placeholder skeleton", async () => {
    render(
      <Provider store={store}>
        <ChakraProvider theme={defaultTheme}>
          <ConnectedRouter history={history}>
            <Sales />
          </ConnectedRouter>
        </ChakraProvider>
      </Provider>
    );

    expect(screen.getByRole("none"));
  });

  test("Render sales content", async () => {
    render(
      <Provider store={store}>
        <ChakraProvider theme={defaultTheme}>
          <ConnectedRouter history={history}>
            <Sales />
          </ConnectedRouter>
        </ChakraProvider>
      </Provider>
    );

    expect(await screen.findByRole("heading"));
    expect(await screen.findByRole("img"));
  });
});
