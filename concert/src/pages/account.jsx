/// Image imports
import { ReactComponent as Star } from "./../images/star.svg";
import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import "./../styles/root.css";
import "./../styles/account.css";
import TaskBar from "./../components/taskbar";
import Modal from 'react-bootstrap/Modal'

/// TODO: Edit info UI functionality?
/// TODO: Change PW Success Modal
/// TODO: Optimize CSS

function DeleteAccountModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="da-contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="da-contained-modal-title-vcenter">
          Delete Account
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Are you sure you want to delete your account?
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="link" onClick={props.onHide}>Cancel</Button>
        <Button variant="danger" onClick={props.onHide}>Delete Account</Button>
      </Modal.Footer>
    </Modal>
  );
}


function ChangePasswordModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="pw-contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="pw-contained-modal-title-vcenter">
          Change Password
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          {/* PASSWORD */}
          <Form.Group controlId="formOldPassword">
            <Form.Label>Old Password</Form.Label>
            <Form.Control type="password" placeholder="Old Password"/>
          </Form.Group>
          <Form.Group controlId="formNewPassword">
            <Form.Label>New Password</Form.Label>
            <Form.Control type="password" placeholder="New Password"/>
          </Form.Group>
          <Form.Group controlId="formConfirmPassword">
            <Form.Label>Confirm New Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm New Password"/>
          </Form.Group>
          <Form.Group controlId="errorMessage">
            <Form.Text style={{ color: "red" }}>* Error Message</Form.Text>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="link" onClick={props.onHide}>Cancel</Button>
        <Button variant="primary" onClick={props.onHide}>Submit</Button>
      </Modal.Footer>
    </Modal>
  );
}


function UserAccount () {
  const [modalShow1, setModalShow1] = React.useState(false); // Change PW Modal
  const [modalShow2, setModalShow2] = React.useState(false); // Delete Account Modal

  const [show, setShow] = useState(false); // States of active modal

  const handleClose1 = () => setShow(false); // Change PW Modal
  const handleClose2 = () => setShow(false); // Delete Account Modal

  const handleShow1 = () => setShow(true); // Change PW Modal
  const handleShow2 = () => setShow(true); // Delete Account Modal

  return (
    <>
      {/* Page Container */}
      <div className="chat-container">
      <TaskBar />
      <div className="background">
        <Row className="background-2" style={{ margin: "0px" }}>
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
                      <Button variant="primary" style={{margin: "1em 0em"}}>
                        Edit Information
                      </Button>
                  </div>

                  <div>
                    {/* CHANGE PW */}
                    <Button variant="primary" style={{margin: "1em 0em"}} onClick={(handleShow1) => setModalShow1(true)}>
                      Change Password
                    </Button>
                    <ChangePasswordModal show={modalShow1} onHide={() => setModalShow1(false)}/>
                  </div>

                  <div>
                    {/* DELETE ACCOUNT */}
                    <Button variant="danger" style={{margin: "1em 0em"}} onClick={(handleShow2) => setModalShow2(true)}>
                      Delete Account
                    </Button>
                    <DeleteAccountModal show={modalShow2} onHide={() => setModalShow2(false)}/>
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
