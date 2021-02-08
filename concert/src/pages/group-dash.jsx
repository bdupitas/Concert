import "./../styles/group-dash.css";
import "./../styles/root.css";
import TaskBar from "./../components/taskbar";
import ChatBox from "./../components/chat-box";
import ChatSideBar from "./../components/chat-sidebar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function GroupDash ({children}) {
  return (
    <>
    <Container fluid style={{ padding: 0, height: '100%' }}>
      <Row>
        <Col md={{ span: 1 }}>
          <TaskBar/>
        </Col>
        <Col md={{ span: 8 }}>
            <ChatBox/>
        </Col>
        <Col md={{ span: 3 }}>
            <ChatSideBar/>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default GroupDash;
