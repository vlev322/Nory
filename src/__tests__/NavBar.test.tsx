import { ChakraProvider } from "@chakra-ui/react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";

import { NavBar } from "../components/core/NavBar/NavBar";

import { store, history } from "../logic/redux/store";
import { defaultTheme } from "../theme/customChakraTheme";

describe("Render once page", () => {
  test("Render placeholder skeleton", async () => {
    render(
      <Provider store={store}>
        <ChakraProvider theme={defaultTheme}>
          <ConnectedRouter history={history}>
            <NavBar />
          </ConnectedRouter>
        </ChakraProvider>
      </Provider>
    );

    expect(await screen.findAllByTestId("testNavbar"));
    expect(screen.getByAltText("Nory Logo"));
    expect(screen.getAllByTitle("navbar item")).toHaveLength(3);
  });
});
