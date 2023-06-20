import React from 'react'
import { Segment, Grid, Icon } from "semantic-ui-react";


function EntryLine() {
  return (
    <Segment color="red">
      <Grid columns={3}>
        <Grid.Row>
          <Grid.Column textAlign="left">Description</Grid.Column>

          <Grid.Column textAlign="center">value</Grid.Column>

          <Grid.Column textAlign="right">
            <Icon name="trash" bordered />
            <Icon name="edit" bordered />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}

export default EntryLine