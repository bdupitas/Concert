import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { ReactComponent as Chalkboard } from "../images/createChalkboard.svg";

const SignUp = ({ children }) => {
  return (
    <>
      <Row>
        <Col>
          <Chalkboard className="login-svg" />
        </Col>
        <Col>
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="email" placeholder="" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="password" placeholder="" />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridAddress1">
              <Form.Label>Email Address</Form.Label>
              <Form.Control placeholder="" />
            </Form.Group>

            <Form.Group controlId="formGridAddress2">
              <Form.Label>Username</Form.Label>
              <Form.Control placeholder="" />
            </Form.Group>

            <Form.Group controlId="formGridAddress2">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Create Account
            </Button>
          </Form>

          {children}
        </Col>
      </Row>
    </>
  );
};

export default SignUp;
