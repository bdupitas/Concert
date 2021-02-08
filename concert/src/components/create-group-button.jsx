import Button from 'react-bootstrap/Button';
// import { Link } from "react-router-dom";
import { IoPeopleCircleSharp } from "react-icons/io5";


function CreateGroupButton ({onButtonClick}) {
  return (
    <>
    
      <Button style={{ background: 'none', border: 'none' }} onClick={onButtonClick}>
        <IoPeopleCircleSharp />
        Create Group
      </Button>
    
    </>
  );
}

export default CreateGroupButton;
