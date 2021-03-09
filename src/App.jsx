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
import { Switch } from './components/molecule/Switch/Switch.component';

function App() {
	// REMOVE
	const [errorState, setIsError] = useState(false);
	const [radioState, setRadioState] = useState(0);
	const [checkedState, setCheckedState] = useState(false);
	const [switchState, setSwitchState] = useState(false);

	const radioOnChange = event => {
		// REMOVE
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
					setIsError(!errorState);
				}}
			>
				<Button>is error?</Button>
			</Box>
			<Box padding={5}>
				<Button isDisabled>add as friend</Button>
			</Box>
			<Box padding={5}>
				<InputIconBlock
					isError={errorState}
					icon={<UserIcon />}
					errorMessage='Please fill in correctly!'
				/>
			</Box>
			<Box padding={5}>
				<CheckBox
					label='Check #1'
					isChecked={checkedState}
					handleOnChange={setCheckedState}
				/>
			</Box>
			<Box padding={5} onClick={radioOnChange}>
				<RadioInput
					label='Radio #1'
					value={1}
					selected={radioState}
					onClick={radioOnChange}
				/>
			</Box>
			<Box padding={5} onClick={radioOnChange}>
				<RadioInput
					label='Radio #2'
					value={2}
					selected={radioState}
					onClick={radioOnChange}
				/>
			</Box>
			<Box padding={5} onClick={radioOnChange}>
				<RadioInput
					label='Radio #3'
					value={3}
					selected={radioState}
					onClick={radioOnChange}
				/>
			</Box>
			<Box margin={5}>
				<Switch
					handleOnChange={setSwitchState}
					isChecked={switchState}
					label='Switch #1'
				/>
			</Box>
		</Box>
	);
}

export default App;
