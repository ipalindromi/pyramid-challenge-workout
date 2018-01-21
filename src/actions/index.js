export const setDifficultyLevel = level => {
	return {
		type: 'SET_DIFFICULTY_LEVEL',
		level
	};
};

export const changeExercise = exerciseName => {
	return {
		type: 'CHANGE_EXERCISE',
		exerciseName
	};
};

export const changeDifficulty = difficultyLevel => {
	return {
		type: 'CHANGE_DIFFICULTY_LEVEL',
		difficultyLevel
	};
};

export const changeMaxLift = maxForLift => {
	return {
		type: 'CHANGE_MAX_LIFT',
		maxForLift
	};
};