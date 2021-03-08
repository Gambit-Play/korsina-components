import { RadioBlock } from './RadioInput.styles';

export const RadioInput = ({ label, value, selected }) => {
	return (
		<RadioBlock isSelected={value === selected}>
			<input type='radio' value={value} />
			<span>
				<div></div>
			</span>
			{label}
		</RadioBlock>
	);
};
