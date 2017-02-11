import React, { PropTypes, Component } from 'react';
import Paper from 'material-ui/Paper';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import AppStore from '../stores/AppStore';
import UserInputActions from '../actions/UserInputActions';
import ExcerciseOptionsForm from './ExcerciseOptionsForm'

export default class SetupOptionsForm extends Component {

	constructor(props) {
		super(props);

		this.state = AppStore.getState();

		this.onAppStoreChange = this.onAppStoreChange.bind(this);
	}

	componentDidMount() {
		AppStore.listen(this.onAppStoreChange);
	};

	componentWillUnmount() {
		AppStore.unlisten(this.onAppStoreChange);
	};

	onAppStoreChange(state) {
		this.setState(state);
	}

	handleDifficultyChange(e, key, value) {
		UserInputActions.changeDifficulty(value);
	}

	handleExerciseChange(e, key, value) {
		UserInputActions.changeExercise(value);
	}

	render() {

		const options = this.state.exercises.map((exercise, idx) => {
			return <MenuItem key={idx} value={ exercise.name } primaryText={ exercise.name }/>;
		});

		options.splice(0, 0, <MenuItem key="null"/>);

		const difficulties = this.state.difficulties.map((difficulty, idx) => {
			return <MenuItem key={idx} value={ difficulty } primaryText={ difficulty }/>;
		});

		return (
			<Paper style={{ padding : 25 }}>
				<h1>Setup</h1>
				<div className="row">
					<div className="col-xs-12">
						<SelectField
							floatingLabelText="Choose Your Exercise"
							onChange={ this.handleExerciseChange.bind(this) }
							errorText={ !this.state.selectedExercise ? 'You must select an exercise' : '' }
							value={ this.state.selectedExercise }
							floatingLabelFixed
							fullWidth
						>
							{ options }
						</SelectField>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-12">
						<SelectField floatingLabelText="Choose Your Difficulty"
									 onChange={ this.handleDifficultyChange.bind(this) }
									 value={ this.state.selectedDifficulty }
									 floatingLabelFixed
									 fullWidth
						>
							{difficulties}
						</SelectField>
					</div>
				</div>
				<ExcerciseOptionsForm exercise={ this.state.selectedExercise }/>
			</Paper>
		);
	}
}
