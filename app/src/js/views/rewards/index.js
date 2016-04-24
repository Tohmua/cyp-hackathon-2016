import React from 'react'
import Container from 'react-container'
import { GridList, IconButton, StarBorder, GridTile } from 'material-ui'
import Dialog from 'material-ui/lib/dialog'
import navigation from '../../lib/navigation'

const rewards = [
  {
    name: 'Test name',
    complete: false
  },
  {
    name: 'Test name 2',
    complete: true
  },
  {
    name: 'Test name 3',
    complete: false
  },
  {
    name: 'Test name 4',
    complete: false
  },
  {
    name: 'Test name 4',
    complete: true
  },
  {
    name: 'Test name 4',
    complete: true
  },
  {
    name: 'Test name 4',
    complete: false
  },
  {
    name: 'Test name 4',
    complete: true
  },
]

const Rewards = React.createClass({
    statics: navigation('Rewards'),
    render () {
        return (
            <Container fill className="light-background" scrollable>
              {rewards.map(reward => 
                <div className={'trophy ' + (reward.complete ? 'trophy-complete' : 'trophy-incomplete')}>{reward.name}</div>
              )}
            </Container>
        )
    }
})

export default Rewards