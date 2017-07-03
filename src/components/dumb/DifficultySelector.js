import React from 'react';
import PropTypes from 'prop-types'
import Slider from 'material-ui/Slider';

const DifficultySelector = (props) => {
	return (
		<Slider onChange={props.onChangeDifficulty}
				step={1}
				min={1}
				max={props.difficulties.length}
				defaultValue={ 1 }
				value={ (props.selectedDifficulty) ? props.selectedDifficulty.level : 1 }/>
	);
};

DifficultySelector.propTypes = {
	// fixme: make shape
	selectedDifficulty: PropTypes.object,
	difficulties: PropTypes.array,
	onChangeDifficulty: PropTypes.func.isRequired,
};

export default DifficultySelector;
