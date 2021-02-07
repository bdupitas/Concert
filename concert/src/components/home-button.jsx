import Button from 'react-bootstrap/Button';
import { TiHomeOutline } from "react-icons/ti";


function HomeButton () {
  return (
    <>
    <Button style={{ background: 'none', border: 'none' }}>
      <TiHomeOutline />
      Home
    </Button>
    </>
  );
}

export default HomeButton;
