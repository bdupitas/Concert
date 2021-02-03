import "./../dash.css";
import "./../root.css";

function GroupDash () {
  return (
    <>
    <body>
  		<div class="chat-container">
      {/*<!-- Home Bar -->*/}
      <div class="taskbar"></div>

  			<main class="chat-main">

  				{/*<!-- Chat Message List Area -->*/}
  				<div class="chat-form-message-area">

  					{/*<!-- Message List Display Box -->*/}

            <div class="dash-header">
  					<h2 id="room-name">COMP491 Concert</h2>
            <p>Welcome to #general</p>
            </div>

  					<div class="chat-messages"></div>

            {/*<!-- User Input Message Bar -->*/}
            <div class="chat-form-container">
              <form id="chat-form">

                {/*<!-- Message Input Area -->*/}
                <input id="msg" type="text" placeholder="Enter Message" required autocomplete="off"/>

                {/*<!-- Send Button -->*/}
                      <button class="btn">

                  {/*<!-- Send Button Icon -->*/}
                  <svg class="bi bi-reply-fill" xmlns="http://www.w3.org/2000/svg">
                    <title>Send Icon</title>
                      <path d="M9.079 11.9l4.568-3.281a.719.719 0 0 0 0-1.238L9.079 4.1A.716.716 0 0 0 8 4.719V6c-1.5 0-6 0-7 8 2.5-4.5 7-4 7-4v1.281c0 .56.606.898 1.079.62z"/>
                  </svg>
                  Send
                </button>
              </form>
            </div>
  				</div>

          {/*<!-- Sidebar -->*/}
          <div class="chat-sidebar">

            {/*<!-- Invite Member Button -->*/}
            <button class="btn" onclick="invite();">Invite</button>

            <div class="dash-section">
              {/*<!-- Display User List -->*/}
              <h3>Members</h3>
              <ul id="users">
                <li>User 1</li>
                <li>User 2</li>
                <li>User 3</li>
              </ul>
            </div>

            <div class="dash-section">
              {/*<!-- Display Channels -->*/}
              <h3>Channels</h3>
              <ul>
                <li># general</li>
                <li># Assignment 2</li>
                <li># Quiz 3</li>
              </ul>
            </div>

            <div class="dash-section">
              {/*<!-- Display Upcoming Events -->*/}
              <h3>Upcoming Events</h3>
              <ul>
                <li>Meeting 1</li>
                <li>Meeting 2</li>
                <li>Meeting 3</li>
              </ul>
            </div>
          </div>
        </main>
  		</div>
  	</body>
    </>
  );
}

export default GroupDash;
