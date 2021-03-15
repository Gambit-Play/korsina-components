import styled, { css } from 'styled-components';
import {
	alignStyles,
	animationStyles,
	borderStyles,
	colorStyles,
	functionStyles,
	marginStyles,
	paddingStyles,
	shadowStyles,
	sizeStyles,
	textStyles,
} from '../../../styles/global.styles';

export const InputIcon = styled.div`
	${alignStyles.center}
	${textStyles.heading4}
    ${borderStyles.borderRadius1}
    ${paddingStyles.paddingY(3)}
    ${paddingStyles.paddingX(8)}
    ${borderStyles.border1(colorStyles.greyScale5)}

	transition: all ${animationStyles.animation1};

	// Focus Style
	${props => props.isFocused && borderStyles.border1(colorStyles.primary)}

	// Error Style
	${props =>
		props.isError &&
		css`
			${shadowStyles.shadow1}
			${borderStyles.border1(colorStyles.error)}
		`}

	svg {
		${sizeStyles.sizePX(12)}
		${paddingStyles.paddingRight(4)}
	}

	path {
		transition: all ${animationStyles.animation1};
		fill: ${colorStyles.greyScale5};

		// Focus Style
		${props =>
			props.isFocused &&
			css`
				fill: ${colorStyles.primary};
			`}

		// Error Style
		${props =>
			props.isError &&
			css`
				fill: ${colorStyles.error};
			`}
	}

	input {
		color: ${colorStyles.greyScale3};
		height: ${functionStyles.spacingPX(15)};
		width: 100%;
		transition: color ${animationStyles.animation1};

		// Error Style
		${props =>
			props.isError &&
			css`
				color: ${colorStyles.error};
			`}
	}
`;

export const ErrorMessage = styled.p`
	${textStyles.heading5}
	${paddingStyles.paddingTop(3)}
	${marginStyles.marginTop(0)}

	color: transparent;
	transform: translate(16px);
	transition: all ${animationStyles.animation1};

	// Error Style
	${props =>
		props.isError &&
		css`
			transform: translate(0px);
			color: ${colorStyles.error};
		`}
`;
