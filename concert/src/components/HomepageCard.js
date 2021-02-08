import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";


import { ReactComponent as Lamp } from "../images/loginLamp.svg";

const HomepageCard = ({ children, mode }) => {
  return (
    <>
      <Container>
        <Jumbotron className="mt-5" md={{ span: 6, offset: 3 }}>
         {mode}
         <div>
           {children}
         </div>
        </Jumbotron>
      </Container>
    </>
  );
};

export default HomepageCard;
