import alt from '../altflux';
import UserInput from '../actions/UserInputActions'
import exercises from '../data/exercises';

const DIFFICULTIES = [
	`I'm Too Young To Die`,
	'Hey, Not Too Rough',
	'Hurt Me Plenty',
	'Ultra-Violence',
	'Nightmare!',
];

const DEFAULT_BARBELL_WEIGHT = 45;

class AppStore {
	constructor() {

		this.selectedExercise = false;
		this.exercises = exercises;
		this.difficulties = DIFFICULTIES;
		this.selectedDifficulty = 'Hurt Me Plenty';

		this.exerciseMax = 0;

		this.bindListeners({
			handleExerciseChange : UserInput.CHANGE_EXERCISE,
			handleChangeDifficulty : UserInput.changeDifficulty,
			handleChangeMaxLift : UserInput.changeMaxLift,
		});
	}

	handleChangeMaxLift(value) {
		this.exerciseMax = value;
	}

	handleChangeDifficulty(difficulty) {
		this.selectedDifficulty = difficulty;
	}

	handleExerciseChange(exercise) {
		this.selectedExercise = exercise;
	}
}

export default alt.createStore(AppStore);
