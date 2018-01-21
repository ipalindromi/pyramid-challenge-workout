import React from 'react'
import PropTypes from 'prop-types'

const DifficultyDescription = (props) => {

	const _makeDifficultyDescription = (difficulty) => {

		const halfOrFull = difficulty.sets === 15 ? "half-pyramid" : "full-pyramid";

		return (
			<div>
				You will be doing a <strong>{halfOrFull}</strong> workout of <strong>{ difficulty.sets }</strong> sets
				starting at <strong>45 lbs.</strong> and working up to <strong>{ difficulty.percentOfMax }%</strong> of
				your one-rep maximum.
			</div>
		);
	};

	return (
		<div className="difficultyDescription">
			<h3>Selected: { props.selectedDifficulty.name }</h3>
			<small>{ props.selectedDifficulty.blurb }</small>
			<div className={`difficultyDescription--${props.selectedDifficulty.level} panel panel-default`}>
				<div className="panel-body">
					{ _makeDifficultyDescription(props.selectedDifficulty) }
				</div>
			</div>
		</div>
	)
};

DifficultyDescription.propTypes = {
	selectedDifficulty: PropTypes.object.isRequired,
};

export default DifficultyDescription;