import Transitions from '../touchstone/Transitions'

const navigation = (pageName) => {
    return {
        navigationBar: 'main',
        getNavigation (props) {
            return {
                title: pageName,
                rightLabel: 'Settings',
                rightAction: function () {
                    Transitions.transitionTo('main:settings')
                }
            }
        }
    }
}

export default navigation
