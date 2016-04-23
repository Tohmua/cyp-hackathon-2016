import React from 'react'

import {
  Container,
  NavigationBar,
  View,
  ViewManager
} from '../touchstone'

import TabViewController from './TabView'

// Can't use FSCs with mixins. Boo.
export default React.createClass({
	render () {
		return (
			<Container>
				<NavigationBar name="main" />
				<ViewManager name="main" defaultView="tabs">
					<View name="tabs" component={ TabViewController } />
					<View name="person" component={require('../views/people/person')} />
					<View name="talk" component={require('../views/schedule/talk')} />
				</ViewManager>
			</Container>
		)
	}
})
