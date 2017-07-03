import React from 'react';
import PropTypes from 'prop-types'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const ExerciseSelector = ({ onChangeExercise, selectedExercise, exercises }) => {
	const menuItems = exercises.map((exercise, idx) => {
		return <MenuItem key={idx} value={ exercise.name } primaryText={ exercise.name }/>;
	});

	menuItems.splice(0, 0, <MenuItem key="null"/>);

	return (
		<SelectField
			onChange={ onChangeExercise }
			errorText={ !selectedExercise ? 'You must select an exercise' : '' }
			value={ selectedExercise ? selectedExercise.name : '' }
			fullWidth
		>
			{ menuItems }
		</SelectField>
	)
};

ExerciseSelector.propTypes = {
	onChangeExercise: PropTypes.func.isRequired,
	exercises: PropTypes.array.isRequired,
	selectedExercise: PropTypes.shape({
		name: PropTypes.string.isRequired,
		isBarbellExercise: PropTypes.bool,
	}),
};

ExerciseSelector.defaultTypes = {
	exercises: [],
};

export default ExerciseSelector;
