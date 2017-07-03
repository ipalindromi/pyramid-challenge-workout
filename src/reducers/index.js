import {combineReducers} from 'redux'
import exercises from '../data/exercises';
import difficulties from '../data/difficulties';

const initialState = {
	exercises,
	difficulties,
	selectedExercise: null,
	selectedDifficulty: difficulties[0],
	maxForLift: 0,
};

const pyramidChallenge = (state = initialState, action) => {
	switch (action.type) {
		case 'CHANGE_DIFFICULTY_LEVEL' :
			return {
				...state,
				selectedDifficulty: difficulties.find(difficulty => {
					return difficulty.level === action.difficultyLevel;
				}),
			};
		case 'CHANGE_EXERCISE' :
			return {
				...state,
				selectedExercise: exercises.find(exercise => {
					return exercise.name === action.exerciseName
				}),
			};
		case 'CHANGE_MAX_LIFT' :
			return Object.assign({}, state, { maxForLift: +action.maxForLift });
		default:
			return state
	}
};

export default pyramidChallenge
