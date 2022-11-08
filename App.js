import React from "react";
import { withExpoSnack } from "nativewind";

import Home from "./src/Home.js";
import StoreProvider from "./src/contexts/StoreContext";
import StateProvider from "./src/contexts/StateContext.js";

const App = () => {
  return (
    <StoreProvider>
      <StateProvider>
        <Home />
      </StateProvider>
    </StoreProvider>
  );
};

// This demo is using a external compiler that will only work in Expo Snacks.
// You may see flashes of unstyled content, this will not occur under normal use!
// Please see the documentation to setup your application
export default withExpoSnack(App);
