import Transitions from '../touchstone/Transitions'

const navigation = (pageName, isChildPage, isEventChild) => {
    return {
        navigationBar: 'main',
        getNavigation (props) {
            return {
                title: pageName,
                leftLabel: isChildPage ? 'Home' : isEventChild ? 'Events' : '',
                rightLabel: ! isChildPage ? 'Settings' : '',
            }
        }
    }
}

export default navigation
