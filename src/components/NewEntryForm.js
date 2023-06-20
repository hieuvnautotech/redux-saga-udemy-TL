import React, {Fragment } from "react";
import { Button, Form, Checkbox, Segment } from "semantic-ui-react";
import ButtonOrCancel from './ButtonOrCancel'

function NewEntryForm() {
    return (
      <Form unstackable>
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
                <Checkbox
                    label="Is Expense"
                    toggle
                />
            </Segment>

            <ButtonOrCancel/>
            
      </Form>
    );
}

export default NewEntryForm;
