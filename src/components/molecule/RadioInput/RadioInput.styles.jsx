import styled from 'styled-components';
import {
	alignStyles,
	textStyles,
	colorStyles,
	borderStyles,
	sizeStyles,
	marginStyles,
	animationStyles,
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
		${alignStyles.center}
		${borderStyles.border1(colorStyles.greyScale6)}
        ${marginStyles.marginRight(7)}
		${sizeStyles.sizePX(10)}
        
		border-radius: 1000px;
		transition: all ${animationStyles.animation1};

		${props =>
			props.isSelected && borderStyles.border1(colorStyles.primary)}

		div {
			${colorStyles.bgPrimary}
			${sizeStyles.sizePX(0)}

            border-radius: 1000px;
			transition: all ${animationStyles.animation1};

			${props => props.isSelected && sizeStyles.sizePX(5)};
		}
	}
`;
