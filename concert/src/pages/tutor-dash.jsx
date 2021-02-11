import "./../styles/group-dash.css";
import "./../styles/root.css";
import TaskBar from "./../components/taskbar";
import TutorDashMain from "./../components/tutor-dash-main.jsx";
import ChatSideBar from "./../components/chat-sidebar";


function TutorDash () {
  return (
    <>
     <div className="chat-container-2">
          <TaskBar/>
          <TutorDashMain/>
          <ChatSideBar />
     </div>
    </>
  );
}

export default TutorDash;
