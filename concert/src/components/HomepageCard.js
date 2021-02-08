import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Login from "./Login"


import { ReactComponent as Lamp } from "../images/loginLamp.svg";

const HomepageCard = ({ children }) => {
  return (
    <>
      <Container>
        <Jumbotron className="mt-5" md={{ span: 6, offset: 3 }}>
        <Login children={children }/>
        </Jumbotron>
      </Container>
    </>
  );
};

export default HomepageCard;
