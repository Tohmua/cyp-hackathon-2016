var Container = require('react-container');
var OnboardingHeader = require('../../components/OnboardingHeader');
var React = require('react');
var { Link, Transitions } = require('../../touchstone');

var classnames = require('classnames');

module.exports = React.createClass({
	mixins: [Transitions],
	contextTypes: { dataStore: React.PropTypes.object.isRequired },

	getInitialState () {
		var showResendEmail = this.context.dataStore.getSettings().showResendEmail;
		return {
			input: '',
			loading: false,
			showResendEmail: showResendEmail,
			valid: null
		};
	},

	componentDidMount () {
		var input = this.refs.input.getDOMNode();

		// wait until the view transition ends then focus the field
		setTimeout(function () {
			input.click();
		}, 320);
	},

	handleFormInput (e) {
		this.setState({
			input: e.target.value.toUpperCase()
		});
	},

	handleFormSubmission (e) {

		// prevent the form from actually submitting
		e.preventDefault();

		if (!this.state.input) {
			return;
		}

		var dataStore = this.context.dataStore;
		var ticketCode = this.state.input.toLowerCase();
		var self = this;

		this.setState({
			loading: true
		}, function () {
			dataStore.activate(ticketCode, function (err) {
				dataStore.synchronize();

				self.setState({
					loading: false,
					valid: !err
				}, function () {
					self.transitionTo('app:main', {
						transition: 'fade'
					});
				});
			});
		});
	},

	render () {
		var submitButtonClass = classnames('onboarding-form__button', {
			'is-loading': this.state.loading,
			'is-valid': this.state.valid,
			'is-invalid': this.state.valid === false
		});

		var submitIsDisabled = this.state.loading || this.state.valid || this.state.valid === false;

		return (
			<Container direction="column">
				<OnboardingHeader />
				<Container justify align="center" direction="column">
					<form onSubmit={this.handleFormSubmission} action="#" className="onboarding-form" noValidate>
						<div className="onboarding-form__section onboarding-form__section--field">
							<input type="password" ref="input" onChange={this.handleFormInput} value={this.state.input} placeholder="Enter Code" className="onboarding-form__input" disabled={this.state.feedback === 'sent'} />
						</div>
						<div className="onboarding-form__section onboarding-form__section--button">
							<button type="submit" className={submitButtonClass} disabled={submitIsDisabled} />
						</div>
					</form>
				</Container>
			</Container>
		);
	}
});
