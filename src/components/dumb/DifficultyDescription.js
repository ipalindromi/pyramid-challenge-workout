import React from 'react'
import PropTypes from 'prop-types'

const DifficultyDescription = (props) => {

	const _makeDifficultyDescription = (difficulty) => {

		const halfOrFull = difficulty.sets === 15 ? "half-pyramid" : "full-pyramid";

		return (
			<div id="difficulty-panel">
				You will be doing a <strong>{halfOrFull}</strong> workout of <strong>{ difficulty.sets }</strong> sets
				starting at <strong>45 lbs.</strong> and working up to <strong>{ difficulty.percentOfMax }%</strong> of
				your one-rep maximum.
			</div>
		);
	};

	return (props.selectedDifficulty) ? (
		<div>
			<h3>Selected: { props.selectedDifficulty.name }
				<small>{ props.selectedDifficulty.blurb }</small>
			</h3>
			<div className={`difficulty-${props.selectedDifficulty.name} panel panel-default`}>
				<div className="panel-body">
					{ _makeDifficultyDescription(props.selectedDifficulty) }
				</div>
			</div>
		</div>
	) : null;
};

DifficultyDescription.propTypes = {
	selectedDifficulty: PropTypes.object,
};

export default DifficultyDescription;
