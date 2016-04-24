import React from 'react'
import navigation from '../../lib/navigation'
import { Container } from '../../touchstone'
import { Toggle, Checkbox, TextField, SelectField, MenuItem } from 'material-ui'
import Divider from 'material-ui/lib/divider';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
var { animation, Link, Transitions } = require('../../touchstone');
import Badge from 'material-ui/lib/badge';
import IconButton from 'material-ui/lib/icon-button';
import NotificationsIcon from 'material-ui/lib/svg-icons/social/notifications';

const switches = [
    ['Allow notifications'],
    ['Ask for cancellation reasons', 'When I cancel events']
].map(([primaryText, secondaryText]) => ({ primaryText, secondaryText }))


const Settings = React.createClass({
    statics: navigation('Add Event', false, true),

     render: () => (
        <Container direction="column">
            <Container fill className="light-background" scrollable direction="column">
                <List>
                    <ListItem><TextField floatingLabelText="Event Name" /></ListItem>
                    <ListItem><TextField floatingLabelText="Date" /></ListItem>
                    <ListItem><TextField floatingLabelText="Time" /></ListItem>
                </List>
            </Container>
            <Container align="center" justify="center" className="light-background" style={{ padding: '10px' }}>
                <Link to="tabs:events" transition="fade" className="MeRegistration__footer-button">Save</Link>
            </Container>
        </Container>
    )
})

export default Settings