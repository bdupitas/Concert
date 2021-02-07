import "./../styles/group-dash.css";
import "./../styles/root.css";
import { GoPlusSmall } from "react-icons/go";

function Meetings () {
  return (
    <>
    {/*<!-- Display Meetings -->*/}
    <div className="dash-section">

      <div className="sidebar-component">
      <h3 className="title" >Meetings</h3>
      <GoPlusSmall color ="white" />
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
