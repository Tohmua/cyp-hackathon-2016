import React from 'react/addons'
import Sentry from 'react-sentry'

import {
	createApp,
	Container,
	NavigationBar,
	Tabs,
	ViewManager,
	View
} from './touchstone'

import TabViewController from './controller/TabView'

import DataStore from './stores/DataStore'
window.dataStore = new DataStore()

var device = require('./lib/device')
const AppContainer = document.getElementById('app')

function hideSplashScreen() {
	try {
		navigator.splashscreen.hide()
	} catch(e) {}
}

function blockBodyTouchMove({ target }) {
	while (target !== document.body) {
		if (target.scrollHeight > target.offsetHeight) {
			return
		}
	}

	// no scrollable parent elements; prevent the move.
	e.preventDefault()
}

var lastWindowHeight = 0
var keyboardIsVisible = false

function updateAppHeight(h) {
	if (typeof h === 'number') h += 'px'
	AppContainer.style.height = h
}

function fixWindowHeight () {
	var resetAppHeight = function () {
		if (keyboardIsVisible || window.innerHeight === lastWindowHeight)
      return

		lastWindowHeight = window.innerHeight
		updateAppHeight(lastWindowHeight)

		window[
      document.body.scrollHeight > window.innerHeight
        ? 'addEventListener' : 'removeEventListener'
    ] ('touchmove', blockBodyTouchMove)
	}

	resetAppHeight()
	setInterval(resetAppHeight, 250)
}

function keyboardShowHandler(e) {
	keyboardIsVisible = true

	delete AppContainer.style.height
    console.log('Keyboard height is: ' + e.keyboardHeight + ', window height is: ' + window.innerHeight + ', last window height is: ' + lastWindowHeight);
}

function keyboardHideHandler(e) {
	keyboardIsVisible = false;
	updateAppHeight(lastWindowHeight);
    console.log('Keyboard is hidden, window height is: ' + window.innerHeight + ', last window height is: ' + lastWindowHeight);
}

var App = React.createClass({
	mixins: [createApp(), Sentry()],

	childContextTypes: {
		dataStore: React.PropTypes.object
	},

	getChildContext () {
		return {
			dataStore: dataStore
		};
	},

	getInitialState () {
		return {
			defaultView: dataStore.amRegistered() ? 'main' : 'onboarding'
		};
	},

	componentDidMount () {
		// Delay the splash screen fade to allow for initial render to complete
		setTimeout(hideSplashScreen, 1000);

		this.watch(dataStore, 'update-settings', this.updateAppState);
		this.watch(document, 'backbutton', function (e) {
			e.preventDefault();
			return console.info('Do nothing by default; where applicable views have their own back button handler.');
		});

		var settings = dataStore.getSettings();
		if (!settings.kill) return;

		this.updateAppState(settings);
	},

	updateAppState (settings) {
		if (!settings.kill) return;

		this.refs.vm.transitionTo('announcement', {
			viewProps: settings.kill
		});
	},

	render () {
		var appWrapperClassName = 'app-wrapper device--' + device.platform;

		return (
			<div className={appWrapperClassName}>
				<div className="device-silhouette">
					<ViewManager ref="vm" name="app" defaultView={this.state.defaultView}>
						<View name="onboarding" component={require('./views/onboarding/index')} />
						<View name="onboarding-resend-email" component={require('./views/onboarding/resend-email')} />
						<View name="onboarding-enter-code" component={require('./views/onboarding/enter-code')} />
						<View name="main" component={MainViewController} />
						<View name="announcement" component={require('./views/announcement')} />
					</ViewManager>
				</div>
			</div>
		);
	}
});

var MainViewController = React.createClass({
	render () {
		return (
			<Container>
				<NavigationBar name="main" />
				<ViewManager name="main" defaultView="tabs">
					<View name="tabs" component={TabViewController} />
					<View name="person" component={require('./views/people/person')} />
					<View name="talk" component={require('./views/schedule/talk')} />
				</ViewManager>
			</Container>
		);
	}
});

const startApp = () => {
	window.StatusBar && window.StatusBar.styleLightContent()
	fixWindowHeight()

	React.render(<App />, AppContainer)
}

if (window.cordova) {
	window.addEventListener('native.keyboardshow', keyboardShowHandler)
	window.addEventListener('native.keyboardhide', keyboardHideHandler)

	document.addEventListener('deviceready', startApp, false)
} else {
	startApp()
}
