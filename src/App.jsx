import { useState } from 'react';
import { Box } from './components/atoms/Box/Box.styles';
import {
	Button,
	ButtonOutlined,
} from './components/atoms/Button/Button.styles';
import { InputIconBlock } from './components/molecule/InputIcon/InputIcon.component';
import { ReactComponent as UserIcon } from './assets/user.svg';
import { CheckBox } from './components/molecule/CheckBox/CheckBox.component';
import { RadioInput } from './components/molecule/RadioInput/RadioInput.component';

function App() {
	// REMOVE
	const [isError, setIsError] = useState(false);
	const [radioState, setRadioState] = useState(0);

	const handleOnChange = event => {
		// REMOVE
		console.log(event.target.value);
		console.log('Radio State: ', radioState);
		setRadioState(parseInt(event.target.value));
	};

	return (
		<Box padding={10} center vertical>
			<Box padding={5}>
				<ButtonOutlined>add as friend</ButtonOutlined>
			</Box>
			<Box padding={5}>
				<ButtonOutlined isDisabled>add as friend</ButtonOutlined>
			</Box>
			<Box
				padding={5}
				onClick={() => {
					setIsError(!isError);
				}}
			>
				<Button>is error?</Button>
			</Box>
			<Box padding={5}>
				<Button isDisabled>add as friend</Button>
			</Box>
			<Box padding={5}>
				<InputIconBlock
					isError={isError}
					icon={<UserIcon />}
					errorMessage='Please fill in correctly!'
				/>
			</Box>
			<Box padding={5}>
				<CheckBox label='Check #1' />
			</Box>
			<Box padding={5} onClick={handleOnChange} vertical>
				<RadioInput
					label='Check #1'
					value={1}
					selected={radioState}
					onClick={handleOnChange}
				/>
			</Box>
			<Box padding={5} onClick={handleOnChange} vertical>
				<RadioInput
					label='Check #2'
					value={2}
					selected={radioState}
					onClick={handleOnChange}
				/>
			</Box>
			<Box padding={5} onClick={handleOnChange} vertical>
				<RadioInput
					label='Check #3'
					value={3}
					selected={radioState}
					onClick={handleOnChange}
				/>
			</Box>
		</Box>
	);
}

export default App;
