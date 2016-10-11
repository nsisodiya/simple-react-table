import React from "react";
import ReactDOM from "react-dom";
import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();

import TableDemo from "./TableDemo";
import {MuiThemeProvider} from "material-ui";
const MainAppWrapper = () => (
  <MuiThemeProvider>
    <TableDemo/>
  </MuiThemeProvider>
);
var node = document.getElementById("root");
ReactDOM.render(<MainAppWrapper/>, node);
