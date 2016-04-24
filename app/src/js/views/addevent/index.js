import React from 'react'
import navigation from '../../lib/navigation'
import { Container } from '../../touchstone'
import { Toggle, Checkbox, TextField, SelectField, MenuItem } from 'material-ui'
import Divider from 'material-ui/lib/divider';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
var { animation, Link, Transitions } = require('../../touchstone');

const switches = [
    ['Allow notifications'],
    ['Ask for cancellation reasons', 'When I cancel events']
].map(([primaryText, secondaryText]) => ({ primaryText, secondaryText }))


const Settings = React.createClass({
    statics: navigation('Add Event', false, true),

    getInitialState() {
        return {
            value: 0
        }
    },

     render: () => (
        <Container direction="column">
            <Container fill className="light-background" scrollable justify="top" direction="column">
                <List>
                    <ListItem><TextField floatingLabelText="Event Name" /></ListItem>
                    <ListItem>
                    <SelectField value='1'>
                      <MenuItem value={1} primaryText="Never"/>
                      <MenuItem value={2} primaryText="Every Night"/>
                      <MenuItem value={3} primaryText="Weeknights"/>
                      <MenuItem value={4} primaryText="Weekends"/>
                      <MenuItem value={5} primaryText="Weekly"/>
                    </SelectField>
                    </ListItem>
                </List>
            </Container>
            <Container align="center" justify="center" className="light-background" style={{ padding: '10px' }}>
                <Link to="tabs:events" transition="fade" className="MeRegistration__footer-button">Save</Link>
            </Container>
        </Container>
    )
})

export default Settings