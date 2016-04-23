var Container = require('react-container');
var Sentry = require('react-sentry');
var React = require('react');
var { animation, Link, Transitions } = require('../../touchstone');
var Swipeable = require('react-swipeable')

var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();

module.exports = React.createClass({
    displayName: 'ViewMe',
    contextTypes: { dataStore: React.PropTypes.object.isRequired },
    mixins: [Sentry(), Transitions, animation.Mixins.ScrollContainerToTop],

    statics: {
        navigationBar: 'main',
        getNavigation (props) {
            // var name = props.me && props.me.name

            return {
                leftIcon: 'ion-android-menu',
                leftAction: emitter.emit.bind(emitter, 'navigationBarLeftAction'),
                rightAction: emitter.emit.bind(emitter, 'navigationBarRightAction'),
                // rightButtonDisabled: !name,
                rightLabel: name ? 'Edit' : '',
                title: 'Mood Tracker'
            }
        }
    },

    render () {
        var content =
            <Container direction="column">
                <Container fill align="center" justify="center" direction="column" scrollable className="MeRegistration__body">
                    <Swipeable className="swipeable"
                    onSwipingRight={this.swipingRight}
                    onSwipingDown={this.swipingDown}
                    onSwipingLeft={this.swipingLeft}>
                        <div className="MeRegistration__heading">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?
                        </div>
                        <p className="MeRegistration__intro">Swipe right for yes</p>
                        <p className="MeRegistration__intro">Swipe left for no</p>
                        <p className="MeRegistration__intro">Swipe down for meh</p>
                    </Swipeable>
                </Container>
            </Container>

        return content;
    },

    swipingRight: function (e) {
        console.log(e);
    },

    swipingDown: function (e) {
        console.log(e);
    },

    swipingLeft: function (e) {
        console.log(e);
    }
});

