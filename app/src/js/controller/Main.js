import React from 'react'
import TabViewController from './TabView'

import {
  Container,
  UI,
  View,
  ViewManager
} from 'touchstonejs'

export default () =>
	<Container>
		<UI.NavigationBar name="main" />
		<ViewManager name="main" defaultView="tabs">
			<View name="tabs" component={ TabViewController } />
		</ViewManager>
	</Container>
