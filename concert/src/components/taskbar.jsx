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
      <View className="home-button">
          {/*<!-- Home Button -->*/}
          <HomeButton />
      </View>
      <View className="taskbar-group-icons">
        {/*<!-- Created Groups -->*/}
        <TaskBarGroupIcons />
      </View>
      <View className="create-group-button">
        {/*<!-- Create Group Button -->*/}
        <CreateGroupButton />
      </View>
    </Container>
    </>
  );
}

export default TaskBar;
