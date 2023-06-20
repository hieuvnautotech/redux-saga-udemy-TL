import React from 'react'
import { Statistic} from 'semantic-ui-react'

function DisplayBl({ size = 'tiny', color = 'black', title, value}) {
  return (
    <Statistic size={size} color={color}>
      <Statistic.Label>{title}</Statistic.Label>
      <Statistic.Value>{value}</Statistic.Value>
    </Statistic>
  );
}

export default DisplayBl