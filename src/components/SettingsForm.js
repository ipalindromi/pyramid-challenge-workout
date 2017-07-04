import React from 'react'
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
