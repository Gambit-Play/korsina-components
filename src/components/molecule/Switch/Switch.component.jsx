import { SwitchBlock } from './Switch.styles';

export const Switch = ({ label, isChecked, handleOnChange }) => {
	return (
		<SwitchBlock
			isChecked={isChecked}
			onClick={() => handleOnChange(!isChecked)}
		>
			<div className='bg'>
				<div className='switch'></div>
			</div>
			<div className='label'>{label}</div>
		</SwitchBlock>
	);
};
