import React from 'react'
import { Segment, Grid } from 'semantic-ui-react'
import DisplayBl from './DisplayBl'

function DisplayBlNum() {
  return (
      <Segment textAlign='center'>
          <Grid columns={2} divided>
              <Grid.Row>
                  <Grid.Column>
                      <DisplayBl
                          title='Income'
                          size='tiny'
                          color='green'
                          value='123'
                      />
                  </Grid.Column>
                  <Grid.Column>
                      <DisplayBl
                          title='Expense'
                          size='tiny'
                          color='red'
                          value='456'
                      />
                  </Grid.Column>
              </Grid.Row>
          </Grid>
    </Segment>
  )
}

export default DisplayBlNum