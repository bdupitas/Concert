/*App.js*/
import React from "react";
import "./App.css";

//Import all needed Component for this tutorial
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Pages
import MainPage from "./pages/index"; ///< index.jsx will be automatically imported
import GroupDash from "./pages/group-dash"; ///< index.jsx will be automatically imported

//imports modes for the main page to re-render
import Login from "./components/Login";
import SignUp from "./components/SignUp"
import ForgotPass from "./components/ForgotPass";

const App = () => {
  const Home = () => <MainPage children={<Login />}/> 
  const CreateAccount = () => <MainPage children={<SignUp />}/>


  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}>
        <Home />
        </Route>
        {/* <Route exact path="/Forgot">
          <MainPage mode={ForgotPass} />
        </Route>
        <Route exact path="/Sign-up">
          <MainPage mode={SignUp} />
        </Route> */}
        <Route exact path="/dash">
          <GroupDash />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
