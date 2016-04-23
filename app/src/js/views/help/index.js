var Container = require('react-container');

import React from 'react';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import CommunicationCall from 'material-ui/lib/svg-icons/communication/call';
import Colors from 'material-ui/lib/styles/colors';

export default React.createClass({
    render: () => (
        <Container direction="column">
            <Container fill justify="top" direction="column" scrollable color="white">
            	<List>
			      <a href="tel:116123"><ListItem
			        rightIcon={<CommunicationCall color={Colors.lightGreen400} />}
			        primaryText="Samaritans"
			        secondaryText="116 123"
			      /></a>
			      <ListItem
			        rightIcon={<CommunicationCall color={Colors.lightGreen400} />}
			        primaryText="A&E"
			      />
			    </List>
            </Container>
        </Container>
    )
})

