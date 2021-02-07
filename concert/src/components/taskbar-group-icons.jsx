import "./../styles/taskbar.css";
import "./../styles/root.css";
import Button from 'react-bootstrap/Button';
import Icon from "./../images/loginLamp.svg";


function TaskBarGroupIcons () {
  return (
    <>
    <ul>
      <li>
        <Button style={{ background: 'none', border: 'none' }}>
          <img src={ Icon } className="group-icon" alt=""/>
        </Button>
      </li>
      <li>
        <Button style={{ background: 'none', border: 'none' }}>
          <img src={ Icon } className="group-icon" alt=""/>
        </Button>
      </li>
      <li>
        <Button style={{ background: 'none', border: 'none' }}>
          <img src={ Icon } className="group-icon" alt=""/>
        </Button>
      </li>
    </ul>
    </>
  );
}

export default TaskBarGroupIcons;
