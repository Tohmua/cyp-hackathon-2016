import Transitions from '../touchstone/Transitions'

const navigation = (pageName, isChildPage) => {
    return {
        navigationBar: 'main',
        getNavigation (props) {
            return {
                title: pageName,
                leftLabel: isChildPage ? 'Home' : '', 
                rightLabel: ! isChildPage ? 'Settings' : '',
            }
        }
    }
}

export default navigation
