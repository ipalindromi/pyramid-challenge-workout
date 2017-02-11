import React, { PropTypes, Component } from 'react';
import Paper from 'material-ui/Paper';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import AppStore from '../stores/AppStore';
import UserInputActions from '../actions/UserInputActions';
import ExcerciseOptionsForm from './ExcerciseOptionsForm';
import Slider from 'material-ui/Slider';
import difficulties from '../data/difficulties';

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

	handleDifficultyChange(e, value) {
		UserInputActions.changeDifficulty(value);
	}

	handleExerciseChange(e, key, value) {
		UserInputActions.changeExercise(value);
	}

	_makeDifficultyDescription(difficulty) {

		const halfOrFull = difficulty.sets === 15 ? "half-pyramid" : "full-pyramid";

		return (
			<div id="difficulty-panel">
				You will be doing a <strong>{halfOrFull}</strong> workout of <strong>{ difficulty.sets }</strong> sets
				starting at <strong>{ difficulty.isBarbellExercise === true ? "45" : ''}</strong> and working up to <strong>{ difficulty.percentOfMax }%</strong> of your one-rep maximum.
			</div>
		);
	}

	render() {

		const options = this.state.exercises.map((exercise, idx) => {
			return <MenuItem key={idx} value={ exercise.name } primaryText={ exercise.name }/>;
		});

		options.splice(0, 0, <MenuItem key="null"/>);

		const difficulty = difficulties[this.state.selectedDifficulty];

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
						<div>
							<h2>Choose Your Difficulty</h2>
							<Slider onChange={this.handleDifficultyChange}
									step={ 1 }
									min={1}
									max={5}
									defaultValue={ 1 }
									value={ this.state.selectedDifficulty }/>

							<div className="panel panel-default">
								<div className="panel-heading">{ difficulty.name }</div>
								<div className="panel-body">
									{ this._makeDifficultyDescription(difficulty) }
								</div>
							</div>
						</div>
					</div>
				</div>
				<ExcerciseOptionsForm exercise={ this.state.selectedExercise }/>
			</Paper>
		);
	}
}
