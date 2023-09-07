import React, {Fragment } from "react";
import { Button, Form, Checkbox, Segment } from "semantic-ui-react";
import ButtonOrCancel from './ButtonOrCancel'
import EntryForm from './EntryForm';

// import useEntryDetails from '../hooks/useEntryDetails';


function NewEntryForm({addEntry, isExpense, value, description, setDescription, setIsExpense, setValue}) {
    return (
      <Form unstackable>
        <EntryForm
          description={description}
          setDescription={setDescription}
          value={value}
          setValue={setValue}
          isExpense={isExpense}
          setIsExpense={setIsExpense}
        />
        <ButtonOrCancel addEntry={addEntry} />
      </Form>
    );
}

export default NewEntryForm;
