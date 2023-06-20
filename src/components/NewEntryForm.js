import React, {Fragment } from "react";
import { Button, Form, Checkbox, Segment } from "semantic-ui-react";

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

            <Button.Group>
                <Button>Cancel</Button>
                <Button.Or></Button.Or>
                <Button>OK</Button>
            </Button.Group>
            
      </Form>
    );
}

export default NewEntryForm;
