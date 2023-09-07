import React, {Fragment } from "react";
import { Button, Form, Checkbox, Segment } from "semantic-ui-react";
import ButtonOrCancel from './ButtonOrCancel'
import EntryForm from './EntryForm';
import useEntryDetails from '../hooks/useEntryDetails';
//lúc đầu bài mẫu là truyền kiểu state, giờ phải truyền theo hook redux
// function NewEntryForm({addEntry, isExpense, value, description, setDescription, setIsExpense, setValue}) {
//     return (
//       <Form unstackable>
//         <EntryForm
//           description={description}
//           setDescription={setDescription}
//           value={value}
//           setValue={setValue}
//           isExpense={isExpense}
//           setIsExpense={setIsExpense}
//         />
//         <ButtonOrCancel addEntry={addEntry} />
//       </Form>
//     );
// }

// export default NewEntryForm;

function NewEntryForm() {
  const {
    description, setDescription, setValue, value, setIsExpense, isExpense, addEntry
} = useEntryDetails()
  
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
      <ButtonOrCancel
        addEntry={addEntry}
        
      />
    </Form>
  );
}

export default NewEntryForm
