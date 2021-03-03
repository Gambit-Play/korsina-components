import styled, { css } from 'styled-components';
import {
	textStyles,
	paddingStyles,
	alignStyles,
	colorStyles,
	functionStyles,
	shadowStyles,
	animationStyles,
	borderStyles,
} from '../../styles/global.styles';

// Default Button Style
const defaultStyle = css`
	${alignStyles.center}
	${textStyles.button}
    ${paddingStyles.paddingY(8)}
    ${paddingStyles.paddingX(8)}
	${borderStyles.borderRadius1}
	min-width: ${functionStyles.spacingPX(80)};
	text-transform: uppercase;
	transition: all ${animationStyles.animation1};

	&:hover {
		${shadowStyles.shadow2}
	}

	&:active {
		${shadowStyles.shadow1}
	}
`;

// Default Disabled Button Style
const disabledStyle = css`
	cursor: auto;

	&:hover {
		box-shadow: none;
	}

	&:active {
		box-shadow: none;
	}
`;

export const Button = styled.button`
	${defaultStyle}
	${colorStyles.bgPrimary}

    color: ${colorStyles.greyScale9};

	${props =>
		props.isDisabled &&
		css`
			background: ${colorStyles.greyScale7};
			color: ${colorStyles.greyScale5};

			${disabledStyle}
		`}
`;

export const ButtonOutlined = styled.button`
	${defaultStyle}
	${paddingStyles.paddingY(7)}
	${borderStyles.border1(colorStyles.greyScale5)}

	color: ${colorStyles.greyScale5};
	background-color: transparent;

	// Disabled Style
	${props =>
		props.isDisabled &&
		css`
			${borderStyles.border1(colorStyles.greyScale6)}
			${disabledStyle}
			
			color: ${colorStyles.greyScale6};
		`}
`;
