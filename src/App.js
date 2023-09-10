import { useState, useEffect} from 'react'
import { Container, Segment } from "semantic-ui-react";
import MainHeader from './components/MainHeader'
import DisplayBl from './components/DisplayBl'
import DisplayBlNum from './components/DisplayBlNum'
import EntryLines from './components/EntryLines'
import NewEntryForm from './components/NewEntryForm'
import ModalEdit from './components/ModalEdit'
import { useDispatch, useSelector } from "react-redux";
// import {getAllEntries} from './actions/entries.actions'



function App() {

  // const entries = useSelector((state) => state.entries);
  const [entries, setEntries] = useState(initialLines)
  const [description, setDescription] = useState('')
  const [value, setValue] = useState('')
  const [isExpense, setIsExpense] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [entryId, setEntryId] = useState('')

  // function addEntry(){
  //   const result = entries.concat(
  //     {
  //       id: entries.length +1,
  //       description,
  //       value,
  //       isExpense,
        
  //     },
  //   );
  //   console.log(`result`,result)
  //   setEntries(result)
  // }

  // function deleteEntry(id) {
  //   const result = entries.filter((entry) => entry.id !== id)
  //   console.log(`entries`,entries)
  //   console.log(`result`,result)
  //   console.log(`id`,id)
  //   setEntries(result)
  // }

  // function editEntry(id){
  //   console.log(`id là ${id}`)
  //   if(id){
  //     const index = entries.findIndex(entry => entry.id === id)
  //     const entry = entries[index];
  //     setEntryId(id)
  //     setDescription(entry.description)
  //     setValue(entry.value)
  //     setIsExpense(entry.isExpense)
  //     setIsOpen(true)
       
      
  //   }
  // }

  // useEffect(() => {
  //   if(!isOpen && entryId){
  //     const index = entries.findIndex(entry => entry.id === entryId)
  //     const newEntries = [...entries]
  //     newEntries[index].description = description
  //     newEntries[index].value = value
  //     newEntries[index].isExpense = isExpense
  //     setEntries(newEntries)
  //     resetEntry()
  //   }
  // }, [isOpen]);

  // function resetEntry(){
  //   setDescription('')
  //     setValue('')
  //     setIsExpense(true)
  // }

  // const dispatch = useDispatch()
  // useEffect(() => {
  //   // fetchInitialData()
  //   dispatch(getAllEntries())
  // },[dispatch])
  
  return (
    <Container>
      <MainHeader type="h1" title="Budget" />
      <DisplayBl title="Your Balance" value="12345" color="green" size="tiny" />
      <DisplayBlNum />
      <MainHeader type="h3" title="History" />
      {/*  deleteEntry={deleteEntry} editEntry={editEntry} setIsOpen={setIsOpen} */}
      <EntryLines entries={entries}/> 
      <MainHeader type="h3" title="Add New Transaction" />
      <NewEntryForm 
        // addEntry={addEntry} 
        description={description}
        setDescription={setDescription}
        value={value}
        setValue={setValue}
        isExpense={isExpense}
        setIsExpense={setIsExpense}
        />
        <ModalEdit 
        isOpen={isOpen} 
        setIsOpen={setIsOpen}
        description={description}
        setDescription={setDescription}
        value={value}
        setValue={setValue}
        isExpense={isExpense}
        setIsExpense={setIsExpense}
        />
    </Container>
  );
}

export default App;

var initialLines = [
  {
    id: 1,
    description: "aaa",
    value: "555",
    isExpense: false,
  },
  {
    id: 2,
    description: "a2a",
    value: "444",
    isExpense: false,
  },
  {
    id: 3,
    description: "44a",
    value: "666",
    isExpense: false,
  },
];
