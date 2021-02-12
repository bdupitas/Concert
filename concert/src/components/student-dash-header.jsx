import "./../styles/student-dash.css";
import "./../styles/root.css";
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import {Link} from "react-router-dom";

function  StudentHeader () {
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
    <div className="student-header">
      <Navbar studentNavbar variant="transparent">
        <div class="container">
          <Button variant="rounded">My Classes</Button>
          <Button variant="rounded">My Tutoring Schedule</Button>
          <Link to="/faq">
              <Button variant="rounded">FAQ</Button>
          </Link>
          
        </div>

      </Navbar>
    </div>
    </>
  );
}
export default StudentHeader;