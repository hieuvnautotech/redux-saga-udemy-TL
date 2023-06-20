import React, {Fragment, useState} from 'react'
import { Form, Container, Segment, Checkbox } from "semantic-ui-react";

function EntryForm() {
  const [description, setDescription] = useState("")
  const [value, setValue] = useState("")
  const [expense, setExpense] = useState(true)
    return (
      <Fragment>
        <Form.Group>
          <Form.Input
            placeholder="New"
            icon="tags"
            width={12}
            label="Description"
            value={description}
            onChange={(e)=>setDescription(e.target.value)}
          />

          <Form.Input
            placeholder="Value"
            icon="dollar"
            width={4}
            label="Description"
            iconPosition="left"
            value={value}
            onChange={(e)=>setValue(e.target.value)}
          />
        </Form.Group>
        <Segment compact>
          <Checkbox label="Is Expense" toggle />
        </Segment>
      </Fragment>
    );
}

export default EntryForm