import { Route, Switch } from "react-router";
import { Flex } from "@chakra-ui/react";

import { NavBar } from "../components/core/NavBar/NavBar";
import { Home } from "../components/Home/Home";
import { Sales } from "../components/Sales/Sales";
import { Labour } from "../components/Labour/Labour";
import { NoMatch } from "../components/NoMatch";

const routes = (
  <Flex>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/sales" component={Sales} />
      <Route exact path="/labour" component={Labour} />
      <Route component={NoMatch} />
    </Switch>
  </Flex>
);

export default routes;
