import "./../styles/taskbar.css";
import "./../styles/root.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import TaskBarGroupIcons from "./../components/taskbar-group-icons";
import CreateGroupButton from "./../components/create-group-button";
import HomeButton from "./../components/home-button";

function TaskBar () {
  return (
    <>
    <Container className="taskbar">
      <Col>
      <Row>
          {/*<!-- Home Button -->*/}
          <HomeButton />
      </Row>
      <Row className="taskbar-group-icons">
        {/*<!-- Created Groups -->*/}
        <TaskBarGroupIcons/>
      </Row>
      <Row>
        {/*<!-- Create Group Button -->*/}
        <CreateGroupButton />
      </Row>
      </Col>
    </Container>
    </>
  );
}

export default TaskBar;
