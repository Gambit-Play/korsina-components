import styled, { css } from 'styled-components';
import {
	alignStyles,
	animationStyles,
	borderStyles,
	colorStyles,
	functionStyles,
	paddingStyles,
	shadowStyles,
	sizeStyles,
	textStyles,
} from '../../../styles/global.styles';

// .gradient-border {
// 	--border-width: 3px;

// 	position: relative;
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// 	width: 300px;
// 	height: 200px;
// 	font-family: Lato, sans-serif;
// 	font-size: 2.5rem;
// 	text-transform: uppercase;
// 	color: white;
// 	background: #222;
// 	border-radius: var(--border-width);

// 	&::after {
// 	  position: absolute;
// 	  content: "";
// 	  top: calc(-1 * var(--border-width));
// 	  left: calc(-1 * var(--border-width));
// 	  z-index: -1;
// 	  width: calc(100% + var(--border-width) * 2);
// 	  height: calc(100% + var(--border-width) * 2);
// 	  background: linear-gradient(
// 		60deg,#1de9b6 40%, #1dc4e9 60%
// 	  );
// 	  background-size: 300% 300%;
// 	  background-position: 0 50%;
// 	  border-radius: calc(2 * var(--border-width));
// 	  animation: moveGradient 4s alternate infinite;
// 	}
// }

// @keyframes moveGradient {
// 	50% {
// 		background-position: 100% 50%;
// 	}
// }

export const InputIcon = styled.div`
	${alignStyles.center}
	${textStyles.heading4}
    ${paddingStyles.paddingY(3)}
    ${paddingStyles.paddingX(8)}
    ${borderStyles.border1(colorStyles.greyScale5)}
    ${borderStyles.borderRadius1}

	transition: all ${animationStyles.animation1};

	// Focus Style
	${props =>
		props.isFocused &&
		css`
			border: 2px solid ${colorStyles.primary};
		`}

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
		width: ${functionStyles.spacingPRCT(100)};
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
	${paddingStyles.paddingTop(2)}
	${textStyles.heading5}

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
