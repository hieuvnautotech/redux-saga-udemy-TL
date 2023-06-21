import { useState} from 'react'
import { Container, Segment } from "semantic-ui-react";
import MainHeader from './components/MainHeader'
import DisplayBl from './components/DisplayBl'
import DisplayBlNum from './components/DisplayBlNum'
import EntryLines from './components/EntryLines'
import NewEntryForm from './components/NewEntryForm'

function App() {
  const [entries, setEntries] = useState(initialLines)
  const [description, setDescription] = useState('')
  const [value, setValue] = useState('')
  const [isExpense, setIsExpense] = useState(false)

  function addEntry(){
    const result = entries.concat(
      {
        id: entries.length +1,
        description,
        value,
        isExpense,
        
      },
    );
    console.log(`result`,result)
    setEntries(result)
  }

  function deleteEntry(id) {
    const result = entries.filter((entry) => entry.id !== id)
    console.log(`entries`,entries)
    console.log(`result`,result)
    console.log(`id`,id)
    setEntries(result)
  }

  return (
    <Container>
      <MainHeader type="h1" title="Budget" />
      <DisplayBl title="Your Balance" value="12345" color="green" size="tiny" />
      <DisplayBlNum />
      <MainHeader type="h3" title="History" />
      <EntryLines entries={entries} deleteEntry={deleteEntry} />
      <MainHeader type="h3" title="Add New Transaction" />
      <NewEntryForm 
        addEntry={addEntry} 
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
