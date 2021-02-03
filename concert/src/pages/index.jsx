/*index.jsx*/
//Import all needed Component for this tutorial
import {Link} from "react-router-dom"; // `npm install react-router-dom --save`

//Functional Component
const MainPage = () => {
  return (
    <div>
      <h3>Login</h3>
      <br/>
      <Link to="/create-group">Create Group</Link>
    </div>
  );
};

export default MainPage;