import { CheckBoxBlock } from './CheckBox.styles';
import { ReactComponent as CheckMarkIcon } from '../../../assets/check-mark.svg';

export const CheckBox = ({ label, isChecked, handleOnChange }) => {
	return (
		<CheckBoxBlock isChecked={isChecked}>
			{label}
			<input
				type='checkbox'
				checked={isChecked}
				onChange={() => handleOnChange(!isChecked)}
			/>
			<span>
				<CheckMarkIcon />
			</span>
		</CheckBoxBlock>
	);
};
