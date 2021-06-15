import { Route, Switch } from "react-router";
import { Flex } from "@chakra-ui/react";

import { NavBar } from "../components/core/NavBar/NavBar";
import { Home } from "../components/Home/Home";
import { Sales } from "../components/Sales/Sales";
import { Labour } from "../components/Labour/Labour";
import { Settings } from "../components/Settings/Settings";
import { NoMatch } from "../components/NoMatch";

const routes = (
  <Flex direction={["column", "row"]}>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/sales" component={Sales} />
      <Route exact path="/labour" component={Labour} />
      <Route exact path="/settings" component={Settings} />
      <Route component={NoMatch} />
    </Switch>
  </Flex>
);

export default routes;
