import "./../styles/tutor-dash.css";
import "./../styles/root.css";
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'

function TutorDashHeader () {
  return (
    <>
    <style type="text/css">
      {`

      .btn-rounded {
        border-radius: 50px 50px 50px 50px;
        background-color: #509DD2;
        color: white;
      }

      .btn-rounded:hover {
        border-radius: 50px 50px 50px 50px;
        background-color: #2f80b6;
        color: white;
      }

      .navbar-transparent {
        background: rgba(0,0,0,0);
      }
      `}
    </style>
    <div className="dash-header">
      <Navbar tutorNavbar variant="transparent">
        <div class="container">
          <Button variant="rounded">My Classes</Button>
          <Button variant="rounded">My Tutoring Schedule</Button>
          <Button variant="rounded">FAQ</Button>
        </div>

      </Navbar>
    </div>
    </>
  );
}

export default TutorDashHeader;
