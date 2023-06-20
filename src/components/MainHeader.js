import React from 'react'
import { Container, Header} from 'semantic-ui-react'

function MainHeader({ type = 'h1', title }) {
  return (
      <Header as={type}>
          { title}
      </Header>
      
  )
}

export default MainHeader