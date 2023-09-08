import React from 'react'
import EntryForm from './EntryForm'
import {Modal, Button} from 'semantic-ui-react'
import { useDispatch} from 'react-redux'
import {closeEditModal} from '../actions/modals.actions'
import useEntryDetails from './../hooks/useEntryDetails';


function ModalEdit({
  setIsOpen, isOpen, description, value, isExpense, setDescription, setValue, setIsExpense, id
}) {
  const dispatch = useDispatch()
  const entryUpdate = useEntryDetails(description, value, isExpense)

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
        <Button onClick={()=>dispatch(closeEditModal())}>Close</Button>

            <Button onClick={()=>entryUpdate.updateEntry(id)} primary>OK</Button>

        </Modal.Actions>
    </Modal>
    
  )
}

export default ModalEdit