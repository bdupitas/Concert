import React from "react"
import Button from 'react-bootstrap/Button'

const InviteButton = ({onButtonClick}) => {
    return(
     <>
    {/*<!-- Invite Member Button -->*/}
    <Button onClick={onButtonClick}>Invite</Button>
    </>
    );
}

export default InviteButton
