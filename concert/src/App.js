/*App.js*/
import { Component } from "react";
import "./App.css";

//Import all needed Component for this tutorial
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

//Pages
import MainPage from "./pages"; ///< index.jsx will be automatically imported
import NotFound from "./pages/404-not-found"; ///< index.jsx will be automatically imported
import GroupDash from "./pages/group-dash"; ///< index.jsx will be automatically imported

class App extends Component {
  render() {
    return (
      <Router>
      <Switch>
       <Route exact path="/" component={MainPage}/>
       <Route exact path="/error=404" component={NotFound}/>
       <Route exact path="/dash" component={GroupDash}/>
       <Redirect to="/error=404"/>
       </Switch>
      </Router>
    );
  }
}

export default App;
