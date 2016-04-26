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
			<Container className="just-light-background">
				<NavigationBar name="main" />
				<ViewManager name="main" defaultView="tabs">
					<View name="tabs" component={ TabViewController } />
				</ViewManager>
			</Container>
		)
	}
})
