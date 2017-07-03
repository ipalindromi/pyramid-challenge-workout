import React from 'react'
import PropTypes from 'prop-types'
import Section from './dumb/Section'
import ChallengeReport from './dumb/ChallengeReport'

const ChallengeReportWrapper = (props) => {
	return (props.selectedExercise && props.maxForLift) ? (
		<Section>
			<ChallengeReport {...props}/>
		</Section>
	) : null;
};

export default ChallengeReportWrapper;
