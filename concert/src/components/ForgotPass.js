import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { ReactComponent as Lamp } from "../images/loginLamp.svg";

const ForgotPass = ({ children }) => {
  return (
    <>
      <Row>
        <Col>
          <Lamp className="login-lamp" />
        </Col>
        <Col>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <ButtonGroup>
              <Button className="mr-2" variant="outline-primary" type="submit">
                Sign up
              </Button>
              <Button variant="primary" type="submit">
                Sign in
              </Button>
            </ButtonGroup>
          </Form>
          {children}
        </Col>
      </Row>
    </>
  );
};

export default ForgotPass;
