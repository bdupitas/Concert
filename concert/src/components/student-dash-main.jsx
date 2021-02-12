import "./../styles/root.css";
import "./../styles/student-dash.css";
import StudentHeader from "./../components/student-dash-header";
import {Link} from "react-router-dom";
import MessageList from "./message-list";
import Container from 'react-bootstrap/Container';
//import Calendar from "./../components/calendar";


function StudentDashMain(){
    return (
        <Container className="dash-main">
            <StudentHeader/>
            <MessageList/>
         </Container>
      );
}
    
export default StudentDashMain;