import React from 'react'
import PropTypes from 'prop-types'
import Slider from 'material-ui/Slider';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';

import DifficultyDescription from '../dumb/DifficultyDescription'

import '../../styles/settings-form.css'

const SettingsForm = (props) => {
	const menuItems = props.exercises.map((exercise, idx) => {
		return <MenuItem key={idx} value={ exercise.name } primaryText={ exercise.name }/>;
	});
	menuItems.splice(0, 0, <MenuItem key="null"/>);

	return (
		<div className="settingsForm padding--m">
			<h3>Choose Your Exercise</h3>
			<SelectField
				onChange={ props.onExerciseChange }
				errorText={ !props.selectedExercise ? 'You must select an exercise' : '' }
				value={ props.selectedExercise ? props.selectedExercise.name : null }
				fullWidth
			>
				{ menuItems }
			</SelectField>
			<div>
				<h3>Choose Your Difficulty:</h3>
					<Slider onChange={props.onChangeDifficulty}
						step={1}
						min={1}
						max={props.difficulties.length}
						defaultValue={1}
						value={ (props.selectedDifficulty) ? props.selectedDifficulty.level : 1 }
					/>
				<div>
					<DifficultyDescription selectedDifficulty={props.selectedDifficulty}/>
				</div>
				<div>
					<h3>Your Max Lift For This Exercise</h3>
					<TextField
						type='number'
						onChange={ props.onMaxLiftChange }
						floatingLabelText="Enter A Number"
						errorText={ ( !props.maxForLift )
							? "You must enter your one rep max"
							: '' }
					/>
				</div>
			</div>
		</div>
	);
};

SettingsForm.propTypes = {
	onChangeDifficulty: PropTypes.func.isRequired,
	onMaxLiftChange: PropTypes.func.isRequired,
	onExerciseChange: PropTypes.func.isRequired,
	exercises: PropTypes.array,
	selectedDifficulty: PropTypes.object,
	selectedExercise: PropTypes.shape({
		name: PropTypes.string.isRequired,
		isBarbellExercise: PropTypes.bool,
	}),
};

export default SettingsForm

/* import React from 'react'
import PropTypes from 'prop-types'
import Section from './dumb/Section'
import {changeExercise, changeDifficulty, changeMaxLift} from '../actions'
import ExerciseSelector from './dumb/ExerciseSelector'
import DifficultySelector from './dumb/DifficultySelector'
import DifficultyDescription from './dumb/DifficultyDescription'
import MaxLiftInput from './dumb/MaxLiftInput'

let dispatchTimer;
const DISPATCH_TIMEOUT = 500;

const SettingsForm = (props) => {

	const onExerciseChange = (target, key, value) => {
		props.dispatch(changeExercise(value))
	};

	const onDifficultyChange = (event, value) => {
		props.dispatch(changeDifficulty(value));
	};

	const onMaxLiftChange = (event, value) => {
		clearTimeout(dispatchTimer);

		dispatchTimer = setTimeout(() => {
			props.dispatch(changeMaxLift(value));
		}, DISPATCH_TIMEOUT)

	};

	const exerciseForm = (props.selectedExercise || true) ? (
		<Section>
			<h3>Choose Your Difficulty:</h3>
			<DifficultySelector
				onChangeDifficulty={onDifficultyChange}
				difficulties={props.difficulties}
				selectedDifficulty={props.selectedDifficulty}
			/>
			<Section>
				<DifficultyDescription selectedDifficulty={props.selectedDifficulty}/>
			</Section>
			<Section>
				<h3>Your Max Lift For This Exercise</h3>
				<MaxLiftInput onChange={onMaxLiftChange}/>
			</Section>
		</Section>
	) : null;

	return (
		<Section className="settingsForm">
			<h3>Choose Your Exercise</h3>
			<ExerciseSelector
				exercises={props.exercises}
				onChangeExercise={onExerciseChange}
				selectedExercise={props.selectedExercise}
			/>
			{ exerciseForm }
		</Section>
	);
};

SettingsForm.PropTypes = {
	dispatch: PropTypes.func.isRequired,
	exercises: PropTypes.array,
	selectedDifficulty: PropTypes.number,
	selectedExercise: PropTypes.shape({
		name: PropTypes.string.isRequired,
		isBarbellExercise: PropTypes.bool,
	}),
};

export default SettingsForm;
 */