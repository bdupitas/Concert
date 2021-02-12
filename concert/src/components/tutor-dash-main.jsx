import "./../styles/tutor-dash.css";
import "./../styles/root.css";
import Container from 'react-bootstrap/Container';
import TutorDashHeader from "./tutor-dash-header";
import TutorDashCourses from "./tutor-dash-courses";


function TutorDashMain () {
  return (
    <>
    {/*<!-- Tutor Dashboard Area -->*/}
    <Container className="dash-main">
      {/*<!-- Tutor Header -->*/}
      <TutorDashHeader />
      {/*<!-- Card display for classes -->*/}
      <TutorDashCourses />
    </Container>
    </>
  );
}

export default TutorDashMain;
