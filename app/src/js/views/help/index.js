import React from 'react'
import Container from 'react-container'
import List from 'material-ui/lib/lists/list'
import TelephoneEntry from '../../components/TelephoneEntry'
import navigation from '../../lib/navigation'
import { ListItem } from 'material-ui'
import Colors from 'material-ui/lib/styles/colors'

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
        const numbers = telephone.map((tel, i) =>
            <TelephoneEntry
                key={i}
                telephone={tel.number}
                primaryText={tel.primaryText}
                secondaryText={tel.secondaryText}
            />
        )

        return (
            <Container fill justify="start" scrollable className="light-background">
                <List style={{ backgroundColor: Colors.lightGreen200 }}>
                    <ListItem>Hey, hope you're okay</ListItem>
                    <ListItem>Here's your saved numbers, if you want to talk</ListItem>
                </List>
               <List>{ numbers }</List>
            </Container>
        )
    }
})

export default TelephoneNumbers
