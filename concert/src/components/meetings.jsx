import "./../styles/group-dash.css";
import "./../styles/root.css";
import { GoPlusSmall } from "react-icons/go";

function Meetings () {
  return (
    <>
    {/*<!-- Display Meetings -->*/}
    <div className="dash-section">

      <div className="sidebar-component">
      <h3>Meetings</h3>
      <button className="btn"><GoPlusSmall/></button>
      </div>

      <ul>
        <li>Meeting 1</li>
        <li>Meeting 2</li>
        <li>Meeting 3</li>
      </ul>

    </div>
    </>
  );
}

export default Meetings;
