import "./../styles/group-dash.css";
import "./../styles/root.css";
import SendIcon from "./../images/paper-plane.png";

function GroupDash () {
  return (
    <>
  		<div className="chat-container">
      {/*<!-- Home Bar -->*/}
      <div className="taskbar"></div>

  			<main className="chat-main">

  				{/*<!-- Chat Message List Area -->*/}
  				<div className="chat-form-message-area">

  					{/*<!-- Message List Display Box -->*/}

            <div className="dash-header">
  					<h2 id="room-name">COMP491 Concert</h2>
            <p>Welcome to #general</p>
            </div>

  					<div className="chat-messages"></div>

            {/*<!-- User Input Message Bar -->*/}
            <div className="chat-form-container">
              <form id="chat-form">
              {/*<!-- Send Button -->*/}
              <button className="send-btn"><img src={SendIcon} className="send-icon" alt="Send Button"/></button>
                {/*<!-- Message Input Area -->*/}
                <input id="msg" type="text" placeholder="Enter Message" required autocomplete="off"/>
              </form>
            </div>
  				</div>

          {/*<!-- Sidebar -->*/}
          <div className="chat-sidebar">

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

            {/*<!-- Display Channels -->*/}
            <div className="dash-section">

              <div className="sidebar-component">
              <h3>Channels</h3>
              <button className="btn">+</button>
              </div>

              <ul>
                <li># general</li>
                <li># Assignment 2</li>
                <li># Quiz 3</li>
              </ul>
            </div>

            {/*<!-- Display Upcoming Events -->*/}
            <div className="dash-section">

              <div className="sidebar-component">
              <h3>Meetings</h3>
              <button className="btn">+</button>
              </div>

              <ul>
                <li>Meeting 1</li>
                <li>Meeting 2</li>
                <li>Meeting 3</li>
              </ul>

            </div>
          </div>
        </main>
  		</div>
      <div>
      Icons made by
      <a href="https://www.freepik.com" title="Freepik">Freepik</a>
      from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
      </div>
    </>
  );
}

export default GroupDash;
