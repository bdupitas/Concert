
import Login from "../components/Login"
import {Link} from "react-router-dom";
import TaskBar from "../components/taskbar"

//Functional Component
const MainPage = () => {
return( <div className="chat-container"> 
<TaskBar />
<Login children={<Link to="/dash">Group Dash</Link> }/> 
</div>
)
}
      



export default MainPage;
