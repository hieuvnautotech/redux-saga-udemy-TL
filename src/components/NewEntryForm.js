import React, {Fragment } from "react";
import { Button, Form, Checkbox, Segment } from "semantic-ui-react";
import ButtonOrCancel from './ButtonOrCancel'
import EntryForm from './EntryForm';

function NewEntryForm() {
    return (
      <Form unstackable>
        
            <EntryForm/>
            <ButtonOrCancel/>
            
      </Form>
    );
}

export default NewEntryForm;
