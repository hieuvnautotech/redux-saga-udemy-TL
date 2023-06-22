import React from 'react'
import { Segment, Grid, Icon } from "semantic-ui-react";


function EntryLine({id, value, description, isExpense, deleteEntry, editEntry}) {
  return (
    <Segment color={isExpense? 'green' : 'red'}>
      <Grid columns={3}>
        <Grid.Row>
          <Grid.Column textAlign="left">{description}</Grid.Column>

          <Grid.Column textAlign="center">{value}</Grid.Column>

          <Grid.Column textAlign="right">
            <Icon name="trash" bordered onClick={()=>deleteEntry(id)} />
            <Icon name="edit" bordered onClick={()=>editEntry(id)}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}

export default EntryLine