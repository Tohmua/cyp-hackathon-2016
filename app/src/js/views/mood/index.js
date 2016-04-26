var Container = require('react-container');
var Sentry = require('react-sentry');
var React = require('react');
var { animation, Link, Transitions } = require('../../touchstone');
var Swipeable = require('react-swipeable')
import navigation from '../../lib/navigation'

var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();

module.exports = React.createClass({
    displayName: 'ViewMe',
    contextTypes: { dataStore: React.PropTypes.object.isRequired },
    mixins: [Sentry(), Transitions, animation.Mixins.ScrollContainerToTop],

    statics: navigation('Mood Tracker'),
    render () {
        var content =
            <Container direction="column" className="light-background">
                <Container fill justify="center" direction="column" className="MeRegistration__body">
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
                        <p className="">Swipe right for yes</p>
                        <p className="">Swipe left for no</p>
                        <p className="">Swipe down for meh</p>
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
            this.setState({ right: (right / 200) })
        }

        if (this.state.right >= 1) {
            this.setState({ right: 0 })
            this.stopSwiping()

            const question = this.state.questions.shift()

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
            this.setState({ top: (top / 200) })
        }

        if (this.state.top >= 1) {
            this.setState({ top: 0 })
            this.stopSwiping()

            const question = this.state.questions.shift()

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
            this.setState({ left: (left / 200) })
        }

        if (this.state.left >= 1) {
            this.setState({ left: 0 })
            this.stopSwiping()

            const question = this.state.questions.shift()

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
            question: 'Am I avoiding this?',
            questions: [
                'Would Demi Lovato avoid this?',
                'Would Demi Lovato worry about this?',
                'Is there another way of looking at this?',
                'Have I checked My Steps?'
            ],
            swiping: false
        }
    }
});

