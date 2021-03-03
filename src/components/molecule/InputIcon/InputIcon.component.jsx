import { useState } from 'react';
import { ErrorMessage, InputIcon } from './InputIcon.styles';

export const InputIconBlock = ({ isError, icon, errorMessage }) => {
	const [isFocused, setIsFocused] = useState(false);

	return (
		<>
			<InputIcon isError={isError} isFocused={isFocused}>
				{icon}
				<input
					onFocus={() => setIsFocused(true)}
					onBlur={() => setIsFocused(false)}
				/>
			</InputIcon>
			<ErrorMessage isError={isError}>{errorMessage}</ErrorMessage>
		</>
	);
};
