var Container = require('react-container');
var Sentry = require('react-sentry');
var React = require('react');
var { animation, Link, Transitions } = require('../../touchstone');
var Social = require('../../mixins/social')

var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();

module.exports = React.createClass({
    displayName: 'ViewMe',
    contextTypes: { dataStore: React.PropTypes.object.isRequired },
    mixins: [Sentry(), Transitions, Social, animation.Mixins.ScrollContainerToTop],

    statics: {
        navigationBar: 'main',
        getNavigation (props) {
            var name = props.me && props.me.name

            return {
                leftIcon: 'ion-android-menu',
                leftAction: emitter.emit.bind(emitter, 'navigationBarLeftAction'),
                rightAction: emitter.emit.bind(emitter, 'navigationBarRightAction'),
                rightButtonDisabled: !name,
                rightLabel: name ? 'Edit' : '',
                title: 'Me'
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

    render () {
        return  <Container direction="column">
                    <Container fill justify="center" direction="column" scrollable>
                    Samaritans: 116 123<a className="Help--phone-link" href="tel:116123"></a>
                    </Container>
                </Container>
    }
});

