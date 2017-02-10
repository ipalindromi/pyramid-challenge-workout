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

		maxInputTimer = window.setTimeout(() => {
			UserInputActions.changeMaxLift(value);
		}, 500)

		this.setState({
			maxEntered : !!value,
		});
	}

	render() {
		const data = exercises.find((exercise) => {
			return exercise.name === this.props.exercise;
		});

		if (!data) {
			return (
				<div>Could Not Find Exercise</div>
			)
		}

		return (
			<div>
				<h1>Let's { this.props.exercise }!</h1>
				<div className="row">
					<div className="col-xs-6">
						<Checkbox style={{ marginTop : 30 }} disabled label="Uses A Barbell"
								  checked={ data.isBarbellExercise }/>
					</div>
					<div className="col-xs-6">
						<TextField fullWidth
								   floatingLabelText="Extra Weight"
								   disabled={ data.isBarbellExercise }
								   value={ (data.isBarbellExercise) ? 45 : 0 }/>
					</div>
				</div>
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
