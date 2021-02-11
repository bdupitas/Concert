import HomepageCard from "../components/HomepageCard";
import { Link } from "react-router-dom";
import TaskBar from "../components/taskbar";


//Functional Component
const MainPage = ({children}) => {
  return (
    <div className="chat-container">
      <TaskBar />
      <HomepageCard
        children={
          <>
            {children}
            <Link className="mr-2" to="/dash">Group Dash</Link>
            <Link className="mr-2" to="/tutor-dash">Tutor Dash</Link>
            <Link className="mr-2"to="/Sign-up">Sign up</Link>
            <Link className="mr-2"to="/Forgot">Forgot Pass</Link>
            <Link className="mr-2"to="/">Login</Link>
          </>
        }
      />
    </div>
  );
};

export default MainPage;
