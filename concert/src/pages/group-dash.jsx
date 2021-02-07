import "./../styles/group-dash.css";
import "./../styles/root.css";
import TaskBar from "./../components/taskbar";
import ChatBox from "./../components/chat-box";
import ChatSideBar from "./../components/chat-sidebar";

function GroupDash ({children}) {
  return (
    <>
  		<div className="chat-container">
        <TaskBar/>
  			<main className="chat-main">
          <ChatBox/>
          <ChatSideBar/>
        </main>
  		</div>
    </>
  );
}

export default GroupDash;
