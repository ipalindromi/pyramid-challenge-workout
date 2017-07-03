/**
 Defines a segment of the page. Essentially a div, but with standard styling applied.
 **/
import React from 'react';

export default (props) => {
	return (
		<div {...props}>{ props.children }</div>
	);
}
