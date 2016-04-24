import React from 'react'
import navigation from '../../lib/navigation'
import { Container } from '../../touchstone'
import { Toggle, Checkbox, TextField } from 'material-ui'
import Divider from 'material-ui/lib/divider';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import SelectField from 'material-ui/lib/select-field';
import MenuItem from 'material-ui/lib/menus/menu-item';

const switches = [
    ['Allow notifications'],
    ['Ask for cancellation reasons', 'When I cancel events']
].map(([primaryText, secondaryText]) => ({ primaryText, secondaryText }))

const Settings = React.createClass({
    statics: navigation('Settings', true),
    render: () => (
        <Container fill className="light-background" scrollable justify="top" direction="column">
            <List>
                <ListItem><TextField floatingLabelText="Name" /></ListItem>
                <ListItem><TextField floatingLabelText="Code" /></ListItem>
            </List>
            <List>
                { switches.map((item, i) => 
                    <ListItem key={ i } { ... item } disabled={ false } rightToggle={<Toggle />} />
                )}
            </List>
            <Divider />
            <List>
                { switches.map((item, i) => 
                    <ListItem key={ i } { ... item } disabled={ false } leftCheckbox={<Checkbox />} />
                )}
            </List>
        </Container>
    )
})

export default Settings