import React from "react"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


import {ReactComponent as Lamp} from "../images/loginLamp.svg"

const Login = ({children}) => {
  return (
    <>
    <Container>
    <Jumbotron className="mt-5" md={{ span: 6, offset: 3 }}>
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
            <Button variant="primary" type="submit">
            Submit
             </Button>
          </Form>
          {children}
        </Col>      
      </Row>
    </Jumbotron>
  </Container>
  </>
  );
};
   

export default Login;