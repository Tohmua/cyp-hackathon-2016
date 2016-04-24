import React from 'react'
import Container from 'react-container'
import Sentry from 'react-sentry'

import Divider from 'material-ui/lib/divider';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';

import navigation from '../../lib/navigation'

import {
  animation,
  Link,
  Transitions
} from '../../touchstone'

import { EventEmitter } from 'events'
const emitter = new EventEmitter()

const items = [
  ['Are you hydrated?', 'Have a glass of water.'],
  ['Have you eaten in the past three hours?', 'If not, get some food — something with protein.'],
  ['Have you showered in the past day?', 'Take a shower right now.'],
  ['If daytime: are you dressed?', 'If not, put on clean clothes that aren\'t pyjamas.'],
  ['Are you fatigued but not sleeping?', 'Close your eyes for fifteen minutes. No screens.'],
  ['Have you stretched your legs in the past day?', 'Go for a brisk walk outside.'],
  ['Have you been kind in the past day?', 'Do so: tell someone why they\'re wonderful.'],
  ['Have you moved to music in the past day?', 'Jog with music, or dance for a while.'],
  ['Would physical contact help?', 'Ask someone for a hug, or for time with a pet.'],
  ['Do you feel ineffective?', 'Do a small job. Respond to that email.'],
  ['Do you feel unattractive?', 'Take a picture, and let your friends tell you otherwise.'],
  ['Do you feel paralysed by indecision?', 'Take a step back, and do some planning.'],
  ['Have you seen a therapist recently?', 'Visit a therapist and talk through this.'],
  ['Are you physically/emotionally stressed?', 'Take time away from that. Relax.'],
  ['Have you changed medications recently?', 'Talk to your doctor if this feeling continues.'],
  ['Have you waited a week?', 'Take some time. See if you still feel the same way.'],
  ['You are stronger than you think.', 'You’ve made it this far, and you will make it through.']
].map(([primaryText, secondaryText]) => ({ primaryText, secondaryText }))

export default React.createClass({
  mixins: [
    Sentry(),
    Transitions,
    animation.Mixins.ScrollContainerToTop
  ],

  statics: navigation('How are you doing?'),

  render () {
    return (
      <Container direction="column" className="light-background" scrollable>
        <List>
          { items.map((item, i) =>
              <ListItem key={ i } { ... item } disabled={ false } />
            )
          }
        </List>
      </Container>
    )
  }
})
