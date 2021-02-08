import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { IoPeopleCircleSharp } from "react-icons/io5";


function CreateGroupButton () {
  return (
    <>
    <Link to="">
      <Button style={{ background: 'none', border: 'none' }}>
        <IoPeopleCircleSharp />
        Create Group
      </Button>
    </Link>
    </>
  );
}

export default CreateGroupButton;
