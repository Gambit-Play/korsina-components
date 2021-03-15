import styled from 'styled-components';
import {
	alignStyles,
	colorStyles,
	marginStyles,
	paddingStyles,
	radiusStyles,
	sizeStyles,
	textStyles,
} from '../../../styles/global.styles';

export const LinksBlock = styled.nav`
	flex: 1;
	background-color: ${colorStyles.greyScale1};
`;

export const Link = styled.a`
	${alignStyles.center}
	${alignStyles.spaceBetween}
    ${paddingStyles.paddingX(10)}
    ${sizeStyles.heightPX(30)}

    color : ${colorStyles.greyScale9};
	border-bottom: 1px solid hsla(0, 0%, 100%, 0.1);
`;

export const LinkIcon = styled.i`
	${sizeStyles.sizePX(12)}
	${marginStyles.marginRight(10)}

	position: relative;

	svg path {
		fill: ${colorStyles.greyScale9};
	}

	.notification {
		${radiusStyles.circle(0)}

		position: absolute;
		background-color: ${colorStyles.error};
		right: -4px;
		top: -4px;

		${props => props.hasNotification && radiusStyles.circle(4)}
	}
`;

export const LinkLabel = styled.label`
	${textStyles.heading4}

	flex: 1;
`;
