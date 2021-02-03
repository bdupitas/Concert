/*App.js*/
import React from "react";
import "./App.css";

//Import all needed Component for this tutorial
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

//Pages
import MainPage from "./pages"; ///< index.jsx will be automatically imported
import GroupDash from "./pages/group-dash"; ///< index.jsx will be automatically imported

const App = () => {
    return (
      <Router>
      <Switch>
       <Route exact path="/" component={MainPage}/>
       <Route exact path="/dash" component={GroupDash}/>
       </Switch>
      </Router>
    );
}

export default App;
