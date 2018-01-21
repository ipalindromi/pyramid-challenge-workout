import exercises from '../data/exercises';
import difficulties from '../data/difficulties';

const initialState = {
	exercises,
	difficulties,
	selectedExercise: null,
	selectedDifficulty: difficulties[0],
	maxForLift: 0,
};

const settingsReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'CHANGE_DIFFICULTY_LEVEL':
			return {
				...state,
				selectedDifficulty: difficulties.find(difficulty => {
					return difficulty.level === action.difficultyLevel;
				}),
			};
		case 'CHANGE_EXERCISE':
			return {
				...state,
				selectedExercise: exercises.find(exercise => {
					return exercise.name === action.exerciseName
				}),
			};
		case 'CHANGE_MAX_LIFT':
			return {
				...state,
				maxForLift: Number(action.maxForLift)
			};
		default:
			return state
	}
};

export default settingsReducer