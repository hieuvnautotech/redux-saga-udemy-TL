import React from 'react'
import { Button, Form, Checkbox, Segment } from "semantic-ui-react";


function ButtonOrCancel({addEntry}) {
  return (
    <Button.Group>
      <Button>Cancel</Button>
      <Button.Or></Button.Or>
      <Button
        onClick={()=> addEntry()}
      >OK</Button>
    </Button.Group>
  );
}

export default ButtonOrCancel