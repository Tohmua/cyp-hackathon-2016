import React from 'react'
import navigation from '../../lib/navigation'
import Container from 'react-container'
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Divider from 'material-ui/lib/divider';
import Colors from 'material-ui/lib/styles/colors'
var { animation, Link, Transitions } = require('../../touchstone');

const items = [
  ['Today', '', 'event-heading'],
  ['CYP Hackathon Presentation', '12:30, Anne Froyd Center (map)', ''],
  ['Tomorrow', '', 'event-heading'],
  ['Cricket Match', 'Take a shower right now.', '14:30, Ludlow Park (map)'],
  ['Next Week', '', 'event-heading'],
  ['Hair Cut', 'Tuesday 26th, 08:30', ''],
  ['Meet Phil', 'Tuesday 26th, 13:00', ''],
  ['Therapy Session', 'Thursday 28th, 13:00', ''],
  ['Dance Class', 'Friday 29th, 19:45', ''],
].map(([primaryText, secondaryText, type]) => ({ primaryText, secondaryText, type }))

export default React.createClass({
    statics: navigation('Events'),

    styleobj: function(type) {
        return type == 'event-heading' ? {backgroundColor: '#DBDBDB', textAlign: 'center'} : {}
    },

    render() {
        return (
            <Container direction="column">
                <Container fill direction="column" scrollable className="light-background">
                    <List>
                      { items.map((item, i) =>
                          <ListItem key={ i } { ... item } disabled={ false } style={ this.styleobj(item.type) } />
                          )
                      }
                    </List>
                </Container>
                <Container align="center" justify="center" className="light-background" style={{ padding: '10px' }}>
                    <Link to="tabs:addevent" transition="fade" className="MeRegistration__footer-button">Add Event</Link>
                </Container>
            </Container>
        )
    }
})

