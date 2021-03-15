import styled from 'styled-components';
import {
	alignStyles,
	colorStyles,
	functionStyles,
	radiusStyles,
} from '../../../styles/global.styles';

export const NotificationBadge = styled.div`
	${alignStyles.center}
	${radiusStyles.circle(10)}

    background-color: ${colorStyles.error};
	font-size: ${functionStyles.fontSizeREM(12)};
	font-weight: 600;
`;
