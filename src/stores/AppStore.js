import alt from '../altflux';
import UserInput from '../actions/UserInputActions'
import exercises from '../data/exercises';
import difficulties from '../data/difficulties';

const DEFAULT_BARBELL_WEIGHT = 45;

const DEFAULT_DIFFICULTY = 1;

class AppStore {
	constructor() {

		this.selectedExercise = false;
		this.exercises = exercises;
		this.difficulties = difficulties;

		this.selectedDifficulty = DEFAULT_DIFFICULTY;
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
