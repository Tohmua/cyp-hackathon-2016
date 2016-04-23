var Container = require('react-container');
var Sentry = require('react-sentry');
var React = require('react');
var { animation, Link, Transitions } = require('../../touchstone');
var Swiper = require('react-swiper');

var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();

React.initializeTouchEvents(true);

module.exports = React.createClass({
    displayName: 'ViewMe',
    contextTypes: { dataStore: React.PropTypes.object.isRequired },
    mixins: [Sentry(), Transitions, animation.Mixins.ScrollContainerToTop],

    statics: {
        navigationBar: 'main',
        getNavigation (props) {
            var name = props.me && props.me.name

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

    getDefaultProps () {
        return {
            me: {}
        }
    },

    componentDidMount () {
        var self = this;
        var body = document.getElementsByTagName('body')[0];
        var menuWrapper = document.getElementsByClassName('Tabs-Navigator-wrapper')[0];
        body.classList.remove('android-menu-is-open');
        menuWrapper.addEventListener('click', function (e) {
            body.classList.remove('android-menu-is-open');
        });

        // navbar actions
        this.watch(emitter, 'navigationBarLeftAction', function () {
            body.classList.toggle('android-menu-is-open');
        });
        this.watch(emitter, 'navigationBarRightAction', function () {
            self.transitionTo('tabs:me-edit', { transition: 'fade' })
        });
    },

    // render () {
    //     const myElement = <span />
    //     return (
    //       <Swiper href="http://example.com" onSwipe={this.handleSwipe}>
    //         Swipe or click me...
    //       </Swiper>
    //     );
    // },

    //   handleSwipe: function (e) {
    //     console.log(e);
    //   }


    render () {
        var content =
            <Container direction="column">
                <Container fill align="center" justify="center" direction="column" scrollable className="MeRegistration__body">
                    <div className="MeRegistration__heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?</div>
                    <p className="MeRegistration__intro">Swipe right for yes</p>
                    <p className="MeRegistration__intro">Swipe left for no</p>
                    <p className="MeRegistration__intro">Swipe down for meh</p>
                </Container>
            </Container>

        return content;
    }
});

