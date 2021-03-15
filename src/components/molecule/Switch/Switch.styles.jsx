import styled, { css } from 'styled-components';
import {
	alignStyles,
	animationStyles,
	colorStyles,
	functionStyles,
	marginStyles,
	shadowStyles,
	sizeStyles,
	textStyles,
} from '../../../styles/global.styles';

export const SwitchBlock = styled.label`
	${alignStyles.centerLeft}

	cursor: pointer;

	.bg {
		${alignStyles.center}

		width: ${functionStyles.spacingPX(20)};
		height: ${functionStyles.spacingPX(8)};
		background-color: ${colorStyles.greyScale8};
		border-radius: 1000px;

		.switch {
			${colorStyles.bgPrimary}
			${sizeStyles.sizePX(12)}
            ${shadowStyles.shadow2}

		    border-radius: 1000px;
			transform: translate(14px, 0px);
			transition: all ${animationStyles.animation1};

			${props =>
				props.isChecked &&
				css`
					background: ${colorStyles.greyScale6};
					transform: translate(-14px, 0px);
				`}
		}
	}

	.label {
		${marginStyles.marginLeft(8)}
		${textStyles.heading4}
	}
`;
