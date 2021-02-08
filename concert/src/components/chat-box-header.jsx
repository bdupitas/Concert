import "./../styles/group-dash.css";
import "./../styles/root.css";
import Container from 'react-bootstrap/Container';

function ChatBoxHeader ({children}) {
  return (
    <>
    <Container className="dash-header">
    <h2 id="room-name">COMP491 Concert</h2>
    <p>Welcome to #general</p>
    </Container>
    </>
  );
}

export default ChatBoxHeader;
