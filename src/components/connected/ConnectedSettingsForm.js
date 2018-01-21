import {
	connect
} from 'react-redux'

import SettingsForm from '../dumb/SettingsForm'

import {
	changeExercise,
	changeDifficulty,
	changeMaxLift
} from '../../actions'

const mapStateToProps = ({
	settings
}) => {
	return {
		selectedExercise: settings.selectedExercise,
		selectedDifficulty: settings.selectedDifficulty,
		maxForLift: settings.maxForLift,
		exercises: settings.exercises,
		difficulties: settings.difficulties,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onChangeDifficulty: (e, value) => {
			dispatch(changeDifficulty(value))
		},
		onMaxLiftChange: (e, value) => {
			dispatch(changeMaxLift(value))
		},
		onExerciseChange: (e, key, value) => {
			dispatch(changeExercise(value))
		},
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsForm)