import React from 'react'

import {
  Container,
  UI,
  View,
  ViewManager
} from 'touchstonejs'

let lastSelectedTab = 'lists'

const TabView = React.createClass({
	getInitialState () {
		return { selectedTab: lastSelectedTab }
	},

	onViewChange (nextView) {
		lastSelectedTab = nextView

		this.setState({
			selectedTab: nextView
		})
	},

	selectTab (value) {
		let viewProps

		this.refs.vm.transitionTo(value, {
			transition: 'instant',
			viewProps: viewProps
		})

		this.setState({
			selectedTab: value
		})
	},

	render () {
		let selectedTab = this.state.selectedTab
		let selectedTabSpan = selectedTab

		if (selectedTab === 'lists' || selectedTab === 'list-simple' || selectedTab === 'list-complex' || selectedTab === 'list-details') {
			selectedTabSpan = 'lists'
		}

		if (selectedTab === 'transitions' || selectedTab === 'transitions-target') {
			selectedTabSpan = 'transitions'
		}

		return (
			<Container>
				<ViewManager ref="vm" name="tabs" defaultView={selectedTab} onViewChange={this.onViewChange}>
					<View name="lists" component={require('../views/lists')} />
					<View name="list-simple" component={require('../views/list-simple')} />
					<View name="list-complex" component={require('../views/list-complex')} />
					<View name="list-details" component={require('../views/list-details')} />
					<View name="form" component={require('../views/form')} />
					<View name="controls" component={require('../views/controls')} />
					<View name="transitions" component={require('../views/transitions')} />
					<View name="transitions-target" component={require('../views/transitions-target')} />
				</ViewManager>
				<UI.Tabs.Navigator>
					<UI.Tabs.Tab onTap={this.selectTab.bind(this, 'mood')} selected={selectedTabSpan === 'mood'}>
						<span className="Tabs-Icon Tabs-Icon--mood" />
						<UI.Tabs.Label>Mood</UI.Tabs.Label>
					</UI.Tabs.Tab>
					<UI.Tabs.Tab onTap={this.selectTab.bind(this, 'events')} selected={selectedTabSpan === 'events'}>
						<span className="Tabs-Icon Tabs-Icon--events" />
						<UI.Tabs.Label>Events</UI.Tabs.Label>
					</UI.Tabs.Tab>
					<UI.Tabs.Tab onTap={this.selectTab.bind(this, 'help')} selected={selectedTabSpan === 'help'} id="tab-help">
						<span className="Tabs-Icon Tabs-Icon--help" />
						<UI.Tabs.Label>Help</UI.Tabs.Label>
					</UI.Tabs.Tab>
					<UI.Tabs.Tab onTap={this.selectTab.bind(this, 'lists')} selected={selectedTabSpan === 'lists'}>
						<span className="Tabs-Icon Tabs-Icon--lists" />
						<UI.Tabs.Label>Lists</UI.Tabs.Label>
					</UI.Tabs.Tab>
					<UI.Tabs.Tab onTap={this.selectTab.bind(this, 'rewards')} selected={selectedTabSpan === 'rewards'}>
						<span className="Tabs-Icon Tabs-Icon--rewards" />
						<UI.Tabs.Label>Rewards</UI.Tabs.Label>
					</UI.Tabs.Tab>
				</UI.Tabs.Navigator>
			</Container>
		)
	}
})

export default TabView
