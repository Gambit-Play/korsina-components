import { useState } from 'react';
import { Box } from './components/atoms/Box.styles';
import { Button, ButtonOutlined } from './components/atoms/Button.styles';
import { InputIconBlock } from './components/molecule/InputIcon/InputIcon.component';
import { ReactComponent as UserIcon } from './assets/user.svg';

function App() {
	const [isError, setIsError] = useState(false);

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
		</Box>
	);
}

export default App;
