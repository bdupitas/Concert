import "./../styles/group-dash.css";
import "./../styles/root.css";

function Members () {
  return (
    <>
    {/*<!-- Invite Member Button -->*/}
    <button className="btn">Invite</button>
    
    <div className="dash-section">
      {/*<!-- Display User List -->*/}
      <h3>Members</h3>
      <ul id="users">
        <li>User 1</li>
        <li>User 2</li>
        <li>User 3</li>
      </ul>
    </div>
    </>
  );
}

export default Members;
