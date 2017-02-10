import alt from '../altflux';

const UserInput = alt.generateActions(
	'changeExercise',
	'changeDifficulty',
	'changeMaxLift',
);

export default alt.createActions(UserInput);
