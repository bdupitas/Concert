import HomepageCard from "../components/HomepageCard";
import { Link } from "react-router-dom";
import TaskBar from "../components/taskbar";

//Functional Component
const MainPage = ({ mode }) => {
  return (
    <div className="chat-container">
      <TaskBar />
      <HomepageCard
        mode={mode}
        children={
          <>
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
