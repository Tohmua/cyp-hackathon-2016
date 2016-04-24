import React from 'react'
import navigation from '../../lib/navigation'
import { Container } from '../../touchstone'
import { Checkbox } from 'material-ui'

const Settings = React.createClass({
    statics: navigation('Settings', true),
    render: () => (
        <Container fill className="light-background" scrollable justify="top" direction="column">
              <h1>Settings</h1>
        </Container>
    )
})

export default Settings