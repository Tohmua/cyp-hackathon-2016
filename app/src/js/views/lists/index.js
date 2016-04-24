import React from 'react'
import Container from 'react-container'
import Sentry from 'react-sentry'

import Divider from 'material-ui/lib/divider';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';

import {
  animation,
  Link,
  Transitions
} from '../../touchstone'

import { EventEmitter } from 'events'
const emitter = new EventEmitter()

const items = [
  ['Are you hydrated?', 'Drink a glass of water.'],
  [ 'Have you not eaten for a while?', 'Not just junk food. Eat something substantial.'],
  [ 'Have you showered today?', 'Take some time to do that right now.'],
  [ 'If day time, are you dressed?', 'Get some clean clothes that aren\'t pyjamas.'],
  [ 'If night time, can you not sleep?', 'Switch off your phone and other screens for a while.'],
  [ 'Have you stretched your legs in the past day?', 'Go for a walk and get a change of scenery.'],
  [ 'Do you feel ineffective?', 'Pick a small job - responding to an email, packing a bag, emptying a bin - and do it.']
].map(([primaryText, secondaryText]) => ({ primaryText, secondaryText }))

export default React.createClass({
  mixins: [
    Sentry(),
    Transitions,
    animation.Mixins.ScrollContainerToTop
  ],

  statics: { navigationBar: 'main' },

  render () {
    return (
      <Container direction="column">
        <List>
          { items.map((item, i) =>
              <ListItem key={ i } { ... item } />
            )
          }
        </List>
      </Container>
    )
  }
})
