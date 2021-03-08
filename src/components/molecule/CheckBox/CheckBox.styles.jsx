import styled, { css } from 'styled-components';
import {
	textStyles,
	alignStyles,
	paddingStyles,
	sizeStyles,
	borderStyles,
	colorStyles,
} from '../../../styles/global.styles';

const defaultSize = 10;

export const CheckBoxBlock = styled.label`
	${alignStyles.centerLeft}
	${textStyles.heading4}
	${sizeStyles.heightPX(defaultSize)}
	${paddingStyles.paddingLeft(18)}

	position: relative;
	cursor: pointer;

	input {
		position: absolute;
		opacity: 0;
		height: 0;
		width: 0;
		cursor: pointer;
	}

	span {
		${alignStyles.center}
		${borderStyles.borderRadius1}
		${colorStyles.bgNone}
		${borderStyles.border1(colorStyles.greyScale6)}
		${sizeStyles.sizePX(defaultSize)}

		position: absolute;
		top: 0;
		left: 0;

		${props =>
			props.isChecked &&
			css`
				${colorStyles.bgPrimary}
				${borderStyles.borderNone}
				${sizeStyles.sizePX(11)}
			`}

		svg {
			${sizeStyles.sizePX(7)}

			display: ${props => (props.isChecked ? 'block' : 'none')};

			path {
				stroke: ${colorStyles.greyScale9};
			}
		}
	}
`;
