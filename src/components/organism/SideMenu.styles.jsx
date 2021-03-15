import styled from 'styled-components';
import { alignStyles } from '../../styles/global.styles';

export const SideMenuBlock = styled.div`
	${alignStyles.vertical}
	${alignStyles.spaceBetween}

	width: 264px;
	height: 100vh;

	.links-block {
		flex: 1;
	}
`;
