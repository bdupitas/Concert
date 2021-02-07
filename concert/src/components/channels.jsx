import "./../styles/group-dash.css";
import "./../styles/root.css";
import { GoPlusSmall } from "react-icons/go";

function Channels () {
  return (
    <>
    {/*<!-- Display Channels -->*/}
    <div className="dash-section">

      <div className="sidebar-component">
      <h3 className="title">Channels</h3>
      
      <GoPlusSmall color ="white" />
      </div>

      <ul>
        <li># general</li>
        <li># Assignment 2</li>
        <li># Quiz 3</li>
      </ul>
    </div>
    </>
  );
}

export default Channels;
