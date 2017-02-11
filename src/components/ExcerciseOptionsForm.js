import React, { PropTypes, Component } from 'react';
import exercises from '../data/exercises';
import Checkbox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField';
import UserInputActions from '../actions/UserInputActions';

let maxInputTimer = false;

export default class ExerciseOptionsForm extends Component {

	static propTypes = {
		//exercise : React.PropTypes.oneOf(Object.keys(exercises)),
	};

	constructor(props) {
		super(props);

		this.state = {
			maxEntered : false,
		}
	}

	componentWillMount() {
	};

	componentDidMount() {
	};

	componentWillUnmount() {
		window.clearTimeout(maxInputTimer);
	};

	handleMaxChange(e, value) {
		window.clearTimeout(maxInputTimer);

		if (isNaN(parseFloat(value))) {
			e.preventDefault();
			return false;
		}

		maxInputTimer = window.setTimeout(() => {
			UserInputActions.changeMaxLift(value);
		}, 500);

		this.setState({
			maxEntered : !!value,
		});
	}

	render() {
		const data = exercises.find((exercise) => {
			return exercise.name === this.props.exercise;
		});

		if (!data) {
			return false;
		}

		return (
			<div>
				<div className="row">
					<div className="col-xs-6">
						<TextField type='number'
								   onChange={ this.handleMaxChange.bind(this) }
								   fullWidth
								   floatingLabelText="Your Max For This Exercise"
								   errorText={ ( !this.state.maxEntered ) ? "You must enter your one rep max" : '' }
						/>
					</div>
				</div>
			</div>
		);
	}
}
