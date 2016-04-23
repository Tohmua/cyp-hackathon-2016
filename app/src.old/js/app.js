import React from 'react';
import ReactDOM from 'react-dom';

import {
	createApp,
  View,
	ViewManager
} from 'touchstonejs'

import TargetOver from './views/transitions-target-over'
import MainViewController from './controller/Main'

const App = React.createClass({
	mixins: [ createApp() ],

	componentDidMount () {
		// Hide the splash screen when the app is mounted
		navigator.splashscreen && navigator.splashscreen.hide()
	},

	render () {
		let appWrapperClassName = 'app-wrapper device--' + (window.device || {}).platform

		return (
			<div className={ appWrapperClassName }>
				<div className="device-silhouette">
					<ViewManager name="app" defaultView="main">
						<View name="main" component={ MainViewController } />
						<View name="transitions-target-over" component={ TargetOver } />
					</ViewManager>
				</div>
			</div>
		)
	}
})

function startApp () {
  // The "StatusBar" for Cordova applications.
	window.StatusBar && window.StatusBar.styleDefault()

	ReactDOM.render(<App />, document.getElementById('app'))
}

window.cordova
  ? document.addEventListener(
      'deviceready',
      startApp,
      false
    )
	: startApp()
