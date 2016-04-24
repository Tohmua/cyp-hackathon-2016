import React from 'react'
import ListItem from 'material-ui/lib/lists/list-item'
import CommunicationCall from 'material-ui/lib/svg-icons/communication/call'
import Colors from 'material-ui/lib/styles/colors'

// this.children
const TelephoneEntry = React.createClass({
	render () {
		return <a href={ 'tel:' + this.props.telephone }>
			<ListItem
		        rightIcon={<CommunicationCall color={Colors.lightGreen400} />}
		        primaryText={ this.props.primaryText }
		        secondaryText={ this.props.secondaryText || '' }
	      	/>
	     </a>
	}
})

export default TelephoneEntry
