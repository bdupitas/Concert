import React from "react"
import Button from 'react-bootstrap/Button'

const PrimaryButton = (properties) => {
    return(
     <>
    <style type="text/css">
    {`
    .btn-light {
        cursor: pointer;
        padding: 0.5em 1em;
        background: #75A8CB;
        color: #ffffff;
        border: none;
        font-family: 'Quicksand', sans-serif;
        font-size: 1em;
	    border-radius: 5px;
    }

    .btn-light:hover{
        background: #000000;
        color: white;
    }

    `}
  </style>
    {/*<!-- Invite Member Button -->*/}
    <Button variant="light"   >Invite</Button>
    </>
    );
}

export default PrimaryButton
