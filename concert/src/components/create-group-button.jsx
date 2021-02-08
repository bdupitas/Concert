import Button from 'react-bootstrap/Button';
import { IoPeopleCircleSharp } from "react-icons/io5";


function CreateGroupButton () {
  return (
    <>
    <Button style={{ background: 'none', border: 'none' }}>
      <IoPeopleCircleSharp />
      Create Group
    </Button>
    </>
  );
}

export default CreateGroupButton;
