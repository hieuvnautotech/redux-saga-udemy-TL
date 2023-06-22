import React from 'react'
import EntryForm from './EntryForm'
import {Modal, Button} from 'semantic-ui-react'


function ModalEdit({setIsOpen, isOpen, description, value, isExpense, setDescription, setValue, setIsExpense}) {
  return (
    <Modal open={isOpen}>
        <Modal.Header>
            Edit Entry
        </Modal.Header>

        <Modal.Content>
          <EntryForm 
          description={description}
          setDescription={setDescription}
          value={value}
          setValue={setValue}
          isExpense={isExpense}
          setIsExpense={setIsExpense}
          />
          
        </Modal.Content>


        <Modal.Actions>
            <Button onClick={()=>setIsOpen(false)}>Close</Button>
        </Modal.Actions>
    </Modal>
    
  )
}

export default ModalEdit