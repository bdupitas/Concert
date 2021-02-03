/*App.js*/
import { Component } from "react";
import "./App.css";

//Import all needed Component for this tutorial
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

//Pages
import MainPage from "./pages"; ///< index.jsx will be automatically imported
import CreateGroup from "./pages/create-group"; ///< index.jsx will be automatically imported

class App extends Component {
  render() {
    return (
      <Router>
      <Switch>
       <Route exact path="/" component={MainPage}/>
       <Route exact path="/create-group" component={CreateGroup}/>
       </Switch>
      </Router>
    );
  }
}

export default App;