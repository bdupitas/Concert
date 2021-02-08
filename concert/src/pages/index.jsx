import HomepageCard from "../components/HomepageCard";
import { Link } from "react-router-dom";
import TaskBar from "../components/taskbar";

//Functional Component
const MainPage = ({children}) => {
  return (
    <div className="chat-container">
      <TaskBar />
      <HomepageCard mode={children} children={<><Link to="/dash">Group Dash</Link> <Link to="/dash">Sign up</Link> <Link to="/dash">Forgot Pass</Link></>} />
     
    </div>
  );
};

export default MainPage;
