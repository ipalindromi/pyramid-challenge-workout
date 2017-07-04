import React from 'react'
import PropTypes from 'prop-types'
import Section from './dumb/Section'
import ChallengeReport from './dumb/ChallengeReport'

const ChallengeReportWrapper = (props) => {
	return (props.selectedExercise && props.maxForLift) ? (
		<Section className="challengeReport">
			<ChallengeReport {...props}/>
		</Section>
	) : (
		<Section className="challengeReport--isNull">
			<h3>Fill out the options first!</h3>
		</Section>
	);
};

export default ChallengeReportWrapper;
