import HomepageCard from "../components/HomepageCard";
import { Link } from "react-router-dom";
import TaskBar from "../components/taskbar";
import Login from "../components/Login";
import { Children } from "react";

//Functional Component
const MainPage = ({children}) => {
  return (
    <div className="chat-container">
      <TaskBar />
      <HomepageCard
        children={
          <>
            {children}
            <Link to="/dash">Group Dash</Link>
            <Link to="/Sign-up">Sign up</Link>
            <Link to="/Forgot">Forgot Pass</Link>
          </>
        }
      />
    </div>
  );
};

export default MainPage;
