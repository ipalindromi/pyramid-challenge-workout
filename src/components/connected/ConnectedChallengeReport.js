import {
	connect
} from 'react-redux'

import ChallengeReport from '../dumb/ChallengeReport'

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

export default connect(mapStateToProps)(ChallengeReport)