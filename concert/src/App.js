/*App.js*/
import React from "react";
import "./App.css";

//Import all needed Component for this tutorial
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";

//Pages
import MainPage from "./pages/index"; ///< index.jsx will be automatically imported
import GroupDash from "./pages/group-dash"; ///< index.jsx will be automatically imported

import Login from "./components/Login"

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <MainPage  children={<Login />}/>
        </Route>
        <Route exact path="/dash">
          <GroupDash />
        </Route>
        <Route exact path="/Forgot">

        </Route>
        <Route exact path="/Sign-up">

        </Route>
      </Switch>
    </Router>
  );
};

export default App;
