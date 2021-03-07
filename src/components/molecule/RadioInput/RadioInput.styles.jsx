import styled, { css } from 'styled-components';
import {
	alignStyles,
	textStyles,
	colorStyles,
	borderStyles,
	sizeStyles,
	marginStyles,
} from '../../../styles/global.styles';

export const RadioBlock = styled.label`
	${alignStyles.centerLeft}
	${textStyles.heading4}

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
		${borderStyles.border1(colorStyles.greyScale6)}
		${sizeStyles.sizePX(10)}
        ${alignStyles.center}
        ${marginStyles.marginRight(7)}

		border-radius: 1000px;

		${props =>
			props.isSelected && borderStyles.border1(colorStyles.primary)}

		div {
			${colorStyles.bgPrimary}
			${sizeStyles.sizePX(5)}

            border-radius: 1000px;
			/* display: none; */
			display: ${props => (props.isSelected ? 'block' : 'none')};
		}
	}
`;
