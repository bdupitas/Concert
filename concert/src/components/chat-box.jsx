import "./../styles/group-dash.css";
import "./../styles/root.css";
import { FaRegPaperPlane } from "react-icons/fa";

function ChatBox () {
  return (
    <>
    {/*<!-- Chat Message List Area -->*/}
    <div className="chat-form-message-area">

      {/*<!-- Message List Display Box -->*/}
      <div className="dash-header">
      <h2 id="room-name">COMP491 Concert</h2>
      <p>Welcome to #general</p>
      </div>

      {/*<!-- Messages -->*/}
      <div className="chat-messages"></div>

      {/*<!-- User Input Message Bar -->*/}
      <div className="chat-form-container">
        <form id="chat-form">
        {/*<!-- Send Button -->*/}
        <button className="send-btn"><FaRegPaperPlane/></button>
          {/*<!-- Message Input Area -->*/}
          <input id="msg" type="text" placeholder="Enter Message" required autocomplete="off"/>
        </form>
      </div>
    </div>
    </>
  );
}

export default ChatBox;
