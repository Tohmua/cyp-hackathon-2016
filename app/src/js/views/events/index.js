import React from 'react'
import navigation from '../../lib/navigation'

export default React.createClass({
    statics: navigation('Events'),
    render: () =>
        <h1>Events</h1>
})
