import { useState } from 'react';
import { RadioBlock } from './RadioInput.styles';

export const RadioInput = ({ label, value, selected }) => {
	const handleOnChange = event => {
		// REMOVE
		console.log(event.target.value);
		console.log(value === selected);
	};

	return (
		<RadioBlock onClick={handleOnChange} isSelected={value === selected}>
			<input type='radio' value={value} />
			<span>
				<div></div>
			</span>
			{label}
		</RadioBlock>
	);
};
