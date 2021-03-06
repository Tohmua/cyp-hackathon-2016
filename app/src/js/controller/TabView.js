import React from 'react'
import Sentry from 'react-sentry'
import navigation from '../lib/navigation'
import {
	Container,
	NavigationBar,
	Tabs,
	ViewManager,
	View
} from '../touchstone'


var lastSelectedTab = 'events'

var TabView = React.createClass({
	statics: navigation('Hello'),
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

	render () {
		var selectedTab = this.state.selectedTab
		if (selectedTab === 'me' || selectedTab === 'me-edit') {
			selectedTab = 'me'
		}

		var me = this.context.dataStore.getMe()

		return (
			<Container className="just-light-background">
				<ViewManager ref="vm" name="tabs"
            defaultView={this.state.selectedTab}
            onViewChange={this.onViewChange}>
					<View name="mood" component={ require('../views/mood') } />
					<View name="events" component={ require('../views/events') } />
					<View name="help" component={ require('../views/help') } />
					<View name="lists" component={ require('../views/lists') } />
					<View name="rewards" component={ require('../views/rewards') } />
					<View name="settings" component={ require('../views/settings') } />
					<View name="addevent" component={ require('../views/addevent') } />
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
						<Tabs.Label>My Steps</Tabs.Label>
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
