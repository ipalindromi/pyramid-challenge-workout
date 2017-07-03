import React from 'react'
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField';

const MaxLiftInput = (props) => {
	return (
		<TextField type='number'
				   onChange={ props.onChange }
				   floatingLabelText="Enter A Number"
				   errorText={ ( !props.maxForLift ) ? "You must enter your one rep max" : '' }
		/>
	);
};

MaxLiftInput.propTypes = {
	onChange: PropTypes.func.isRequired,
	maxForLift: PropTypes.number,
}

export default MaxLiftInput;
