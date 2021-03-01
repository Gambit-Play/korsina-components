import styled, { css } from 'styled-components';
import {
	textStyles,
	paddingStyles,
	alignStyles,
	colorStyles,
	functionStyles,
	shadowStyles,
} from '../../styles/global.styles';

// Default Button Style
const defaultStyle = css`
	${alignStyles.center}
	${textStyles.button}
    ${paddingStyles.paddingY(8)}
    ${paddingStyles.paddingX(8)}
	min-width: ${functionStyles.spacingPX(80)};
	border-radius: ${functionStyles.radiusPX(2)};
	text-transform: uppercase;
	transition: box-shadow 300ms cubic-bezier(0.25, 0.8, 0.25, 1);

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

	color: ${colorStyles.greyScale5};
	border: 2px solid ${colorStyles.greyScale5};
	background-color: transparent;

	${props =>
		props.isDisabled &&
		css`
			color: ${colorStyles.greyScale6};
			border: 2px solid ${colorStyles.greyScale6};

			${disabledStyle}
		`}
`;
