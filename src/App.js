import { Container, Segment } from "semantic-ui-react";
import MainHeader from './components/MainHeader'
import DisplayBl from './components/DisplayBl'
import DisplayBlNum from './components/DisplayBlNum'
import EntryLines from './components/EntryLines'
import NewEntryForm from './components/NewEntryForm'

function App() {
  return (
    <Container>
      <MainHeader type="h1" title='Budget' />
      <DisplayBl title="Your Balance" value="12345" color="green" size="tiny" />
      <DisplayBlNum />
      <MainHeader type="h3" title='History' />
      <EntryLines />
      <MainHeader type="h3" title='Add New Transaction' />
      <NewEntryForm/>
    </Container>
  );
}

export default App;
