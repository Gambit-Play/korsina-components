import { Box } from './components/atoms/Box.styles';

function App() {
	return (
		<Box size={100} center vertical>
			<Box padding={3} marginTop={10} margin={10}>
				Hello Yalll
			</Box>
			<Box padding={3}>Hello Yalll</Box>
			<Box padding={3}>Hello Yalll</Box>
		</Box>
	);
}

export default App;
