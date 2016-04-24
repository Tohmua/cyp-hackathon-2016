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
                <Container fill align="center" justify="center" direction="column" className="MeRegistration__body">
                    <Swipeable className="swipeable"
                    onSwipingRight={this.swipingRight}
                    onSwipingDown={this.swipingDown}
                    onSwipingLeft={this.swipingLeft}>
                        <div id="goodResponse" style={{opacity: this.state.right }} />
                        <div id="badResponse" style={{opacity: this.state.left }} />
                        <div id="mehResponse" style={{opacity: this.state.top }} />
                        <div className="MeRegistration__heading">
                            { this.state.question }
                        </div>
                        <p className="MeRegistration__intro">Swipe right for yes</p>
                        <p className="MeRegistration__intro">Swipe left for no</p>
                        <p className="MeRegistration__intro">Swipe down for meh</p>
                    </Swipeable>
                </Container>
            </Container>

        return content;
    },

    currentlySwiping: function () {
        return this.state.swiping
    },

    startSwiping: function () {
        this.setState({ swiping: true })
    },

    stopSwiping: function () {
        this.setState({ swiping: false })
    },

    swipingRight: function (e, right) {
        this.setState({ left: 0 })
        this.setState({ top: 0 })

        if (right < 20) {
            this.startSwiping()
        }

        if (this.state.question !== 'Done' && this.currentlySwiping()) {
            this.setState({ right: this.state.right + (2 / right) })
        }

        if (this.state.right >= 1) {
            this.setState({ right: 0 })
            this.stopSwiping()

            const question = this.state.questions.pop()

            if (typeof question !== 'undefined') {
                this.setState({ question: question})
            } else {
                this.setState({ question: 'Done'})
            }

        }
    },

    swipingDown: function (e, top) {
        this.setState({ left: 0 })
        this.setState({ right: 0 })

        if (top < 20) {
            this.startSwiping()
        }

        if (this.state.question !== 'Done' && this.currentlySwiping()) {
            this.setState({ top: this.state.top + (2 / top) })
        }

        if (this.state.top >= 1) {
            this.setState({ top: 0 })
            this.stopSwiping()

            const question = this.state.questions.pop()

            if (typeof question !== 'undefined') {
                this.setState({ question: question})
            } else {
                this.setState({ question: 'Done'})
            }

        }
    },

    swipingLeft: function (e, left) {
        this.setState({ right: 0 })
        this.setState({ top: 0 })

        if (left < 20) {
            this.startSwiping()
        }

        if (this.state.question !== 'Done' && this.currentlySwiping()) {
            this.setState({ left: this.state.left + (2 / left) })
        }

        if (this.state.left >= 1) {
            this.setState({ left: 0 })
            this.stopSwiping()

            const question = this.state.questions.pop()

            if (typeof question !== 'undefined') {
                this.setState({ question: question})
            } else {
                this.setState({ question: 'Done'})
            }

        }
    },

    getInitialState() {
        return {
            right: 0,
            left: 0,
            top: 0,
            question: 'Lorem ipsum dolor sit amet?',
            questions: [
                'Consectetur adipiscing elit?',
                'Eed do eiusmod tempor incididunt ut?',
                'Labore et dolore magna aliqua?'
            ],
            swiping: false
        }
    }
});

