import { useState } from 'react';
import { CheckBoxBlock } from './CheckBox.styles';
import { ReactComponent as CheckMarkIcon } from '../../../assets/check-mark.svg';

export const CheckBox = ({ label, isChecked }) => {
	const [state, setState] = useState(false);

	return (
		<CheckBoxBlock isChecked={state}>
			{label}
			<input
				type='checkbox'
				checked={state}
				onChange={() => setState(!state)}
			/>
			<span>
				<CheckMarkIcon />
			</span>
		</CheckBoxBlock>
	);
};
