///import InviteButton from "./invite-button"
import "./../styles/root.css";
import "./../styles/group-dash.css";
import InviteMember from "./invite-members"

function Members () {
  return (
    <>
    <InviteMember />

    <div className="dash-section">
      {/*<!-- Display User List -->*/}
      <h3 className="title">Members</h3>
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
