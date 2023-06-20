import React, {Fragment} from 'react'
import { Form, Container, Segment, Checkbox } from "semantic-ui-react";

function EntryForm() {
    return (
      <Fragment>
        <Form.Group>
          <Form.Input
            placeholder="New"
            icon="tags"
            width={12}
            label="Description"
          />

          <Form.Input
            placeholder="Value"
            icon="dollar"
            width={4}
            label="Description"
            iconPosition="left"
          />
        </Form.Group>
        <Segment compact>
          <Checkbox label="Is Expense" toggle />
        </Segment>
      </Fragment>
    );
}

export default EntryForm