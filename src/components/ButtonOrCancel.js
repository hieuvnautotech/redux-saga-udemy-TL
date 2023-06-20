import React from 'react'
import { Button, Form, Checkbox, Segment } from "semantic-ui-react";


function ButtonOrCancel() {
  return (
    <Button.Group>
      <Button>Cancel</Button>
      <Button.Or></Button.Or>
      <Button>OK</Button>
    </Button.Group>
  );
}

export default ButtonOrCancel