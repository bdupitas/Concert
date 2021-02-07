import "./../styles/taskbar.css";
import "./../styles/root.css";
import TaskBarGroupIcons from "./../components/taskbar-group-icons";
import CreateGroupButton from "./../components/create-group-button";
import HomeButton from "./../components/home-button";
import Container from 'react-bootstrap/Container';
import { View } from 'react-native';


function TaskBar () {
  return (
    <>
    <Container className="taskbar">
      <View style={{ flex: 1 }}>
          {/*<!-- Home Button -->*/}
          <HomeButton />
      </View>
      <View style={{ flex: 7 }}>
        {/*<!-- Created Groups -->*/}
        <TaskBarGroupIcons />
      </View>
      <View style={{ flex: 1 }}>
        {/*<!-- Create Group Button -->*/}
        <CreateGroupButton />
      </View>
    </Container>
    </>
  );
}

export default TaskBar;
