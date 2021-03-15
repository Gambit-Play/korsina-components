import styled, { css } from 'styled-components';
import { radiusStyles } from '../../../styles/global.styles';

export const AvatarImage = styled.img`
	background-image: url(${props => props.image});
	background-position: 50% 50%;
	background-size: cover;
	background-repeat: no-repeat;

	${props =>
		props.size
			? css`
					${radiusStyles.circle(props.size)}
			  `
			: radiusStyles.circle(24)}
`;
