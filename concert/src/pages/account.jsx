/// Image imports
import { ReactComponent as Star } from "./../images/star.svg";
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import "./../styles/group-dash.css";
import "./../styles/root.css";
import "./../styles/account.css";
import TaskBar from "./../components/taskbar";

function UserAccount () {
  return (
    <>
      {/* Page Container */}
      <div className="chat-container">
      <TaskBar />
      <div className="background-2">
        <Row className="background">
          <Col>
            {/* Title */}
            <h2>User Account</h2>
            <Form>
              {/* Form */}
              {/* FNAME */}
              <Form.Row>
                <Form.Group as={Col} controlId="formGridFname">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" placeholder="FNAME" readOnly/>
                </Form.Group>

                {/* LNAME */}
                <Form.Group as={Col} controlId="formGridLname">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" placeholder="LNAME" readOnly/>
                </Form.Group>
              </Form.Row>

              {/* EMAIL */}
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" readOnly/>
              </Form.Group>

              {/* PASSWORD */}
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" readOnly/>
              </Form.Group>
              <Row>
                <Col>
                  {/* Buttons */}
                  <ButtonToolbar
                    className="btn-group-vertical"
                    aria-label="Toolbar with Button groups"
                  >
                  <div>
                    {/* EDIT INFO */}
                      <Button variant="primary" type="submit" style={{margin: "1em 0em"}}>
                        Edit Information
                      </Button>
                  </div>

                  <div>
                    {/* CHANGE PW */}
                    <Button variant="primary" type="submit" style={{margin: "1em 0em"}}>
                      Change Password
                    </Button>
                  </div>

                  <div>
                    {/* DELETE ACCOUNT */}
                    <Button variant="danger" type="submit" style={{margin: "1em 0em"}}>
                      Delete Account
                    </Button>
                  </div>
                  </ButtonToolbar>
                </Col>
              </Row>
            </Form>
          </Col>
          <Col className="img-container">
            {/* Image */}
            <Star className="star-svg" />
          </Col>
        </Row>
      </div>
      </div>

    </>
  );
}

export default UserAccount;
