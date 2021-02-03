/*index.jsx*/
//Import all needed Component for this tutorial
import {Link} from "react-router-dom";

//Functional Component
const MainPage = () => {
  return (
    <div>
      <h3>Welcome to the React Router Tutorial</h3>
      <small>Main Page</small>
      <br/>
      <Link to="/dash">Group Dash</Link>
    </div>
  );
};

export default MainPage;
