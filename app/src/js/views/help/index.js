import React from 'react'
import Container from 'react-container'
import List from 'material-ui/lib/lists/list'
import TelephoneEntry from '../../components/TelephoneEntry'
import navigation from '../../lib/navigation'

const telephone = [
	{
		number: 116123,
		primaryText: "Samaritans",
		secondaryText: "116 123"
	},
	{
		number: 2345678,
		primaryText: "Liam",
		secondaryText: "Agile."
	},
	{
		number: 116123,
		primaryText: "Dr Roy",
		secondaryText: "As seen on TV"
	},
]

const TelephoneNumbers = React.createClass({
    statics: navigation('Emergency Contacts'),
    render () {
        const numbers = telephone.map(tel =>
            <TelephoneEntry
                telephone={tel.number}
                primaryText={tel.primaryText}
                secondaryText={tel.secondaryText}
            />
        )

        return (
            <Container fill justify="top" scrollable className="light-background">
        	   <List>{ numbers }</List>
            </Container>
        )
    }
})

export default TelephoneNumbers
