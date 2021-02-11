import "./../styles/tutor-dash.css";
import "./../styles/root.css";
import MessageList from "./message-list";
import Container from 'react-bootstrap/Container';
import TutorDashHeader from "./tutor-dash-header";


function TutorDashMain () {
  return (
    <>
    {/*<!-- Chat Message List Area -->*/}
    <Container className="dash-main">
      {/*<!-- Message List Display Box -->*/}
      <TutorDashHeader />
      {/*<!-- Messages -->*/}
      <MessageList />
    </Container>
    </>
  );
}

export default TutorDashMain;
