import React from 'react'
import Sentry from 'react-sentry'

import {
	Container,
	NavigationBar,
	Tabs,
	ViewManager,
	View
} from '../touchstone'


var lastSelectedTab = 'me';
var TabView = React.createClass({
	contextTypes: { dataStore: React.PropTypes.object.isRequired },
	mixins: [Sentry()],

	getInitialState () {
		var showAboutView = this.context.dataStore.getSettings().showAboutView;
		var theBigReveal = Date.now() > new Date('Wed, 03 Jul 2015 10:00:00 GMT').getTime();

		return {
			selectedTab: lastSelectedTab,
			showAboutView: showAboutView || theBigReveal
		};
	},

	componentDidMount () {
		// android backbutton handler
		this.watch(document, 'backbutton', () => {
 				var body = document.getElementsByTagName('body')[0];
 				body.classList.remove('android-menu-is-open');
		});

		this.watch(dataStore, 'update-settings', this.updateTabState);
	},

	onViewChange (nextView) {
		lastSelectedTab = nextView;

		this.setState({
			selectedTab: nextView
		});
	},

	updateTabState (settings) {
		this.setState({
			showAboutView: settings.showAboutView
		});
	},

	selectTab (tab) {
		var viewProps;

		if (tab.value === 'me') {
			viewProps = {
				me: this.context.dataStore.getMe()
			};
		}

		this.refs.vm.transitionTo(tab.value, {
			viewProps: viewProps
		});
	},

	renderAboutTab () {
		if (!this.state.showAboutView) return <span />

		return (
			<Tabs.Tab value="about">
				<span className="Tabs-Icon Tabs-Icon--about" />
				<Tabs.Label>About</Tabs.Label>
			</Tabs.Tab>
		);
	},

	render () {
		var selectedTab = this.state.selectedTab
		if (selectedTab === 'me' || selectedTab === 'me-edit') {
			selectedTab = 'me'
		}

		var me = this.context.dataStore.getMe()

		return (
			<Container>
				<ViewManager ref="vm" name="tabs" defaultView={this.state.selectedTab} onViewChange={this.onViewChange}>
					<View name="schedule" component={require('../views/schedule')} />
					<View name="people" me={me} component={require('../views/people')} />
					<View name="event" component={require('../views/event')} />
					<View name="me" me={me} component={require('../views/me')} />
					<View name="me-edit" component={require('../views/me/edit')} />
					<View name="about" component={require('../views/about')} />
				</ViewManager>
				<Tabs.Navigator value={selectedTab} onChange={this.selectTab}>
					<Tabs.Tab value="mood">
						<span className="Tabs-Icon Tabs-Icon--mood" />
						<Tabs.Label>Mood</Tabs.Label>
					</Tabs.Tab>
					<Tabs.Tab value="events">
						<span className="Tabs-Icon Tabs-Icon--events" />
						<Tabs.Label>Events</Tabs.Label>
					</Tabs.Tab>
					<Tabs.Tab value="help">
						<span className="Tabs-Icon Tabs-Icon--help" />
					</Tabs.Tab>
					<Tabs.Tab value="lists">
						<span className="Tabs-Icon Tabs-Icon--lists" />
						<Tabs.Label>Lists</Tabs.Label>
					</Tabs.Tab>
					<Tabs.Tab value="rewards">
						<span className="Tabs-Icon Tabs-Icon--rewards" />
						<Tabs.Label>Rewards</Tabs.Label>
					</Tabs.Tab>
				</Tabs.Navigator>
			</Container>
		)
	}
})

export default TabView
