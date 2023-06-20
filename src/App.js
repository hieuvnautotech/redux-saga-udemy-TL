import { useState} from 'react'
import { Container, Segment } from "semantic-ui-react";
import MainHeader from './components/MainHeader'
import DisplayBl from './components/DisplayBl'
import DisplayBlNum from './components/DisplayBlNum'
import EntryLines from './components/EntryLines'
import NewEntryForm from './components/NewEntryForm'

function App() {
  const [entries, setEntries] = useState(initialLines)

  function addEntry(){
    
  }

  return (
    <Container>
      <MainHeader type="h1" title="Budget" />
      <DisplayBl title="Your Balance" value="12345" color="green" size="tiny" />
      <DisplayBlNum />
      <MainHeader type="h3" title="History" />
      <EntryLines entries={entries} />
      <MainHeader type="h3" title="Add New Transaction" />
      <NewEntryForm />
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
    id: 2,
    description: "44a",
    value: "666",
    isExpense: false,
  },
];
