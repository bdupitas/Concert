import React from "react"
import Button from 'react-bootstrap/Button'
import "./../styles/sidebar.css";


const InviteButton = ({onButtonClick}) => {
    return(
     <>
     <div class="invite-button-position">
       {/*<!-- Invite Member Button -->*/}
       <Button onClick={onButtonClick}>Invite</Button>
     </div>
    </>
    );
}

export default InviteButton
