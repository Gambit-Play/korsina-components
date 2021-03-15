import styled from 'styled-components';
import {
	alignStyles,
	colorStyles,
	marginStyles,
	paddingStyles,
	textStyles,
} from '../../../styles/global.styles';

export const ProfileBlock = styled.section`
	${paddingStyles.padding(10)}
	${colorStyles.bgPrimary}

	.profile-info {
		${alignStyles.centerLeft}
	}

	.avatar {
		${marginStyles.marginRight(10)}
	}
`;

export const ProfileName = styled.h2`
	${textStyles.heading3}
	${marginStyles.marginBottom(2)}

	color: ${colorStyles.greyScale1};
`;

export const ProfileDepartment = styled.h3`
	${textStyles.heading4}

	color: ${colorStyles.greyScale1};
`;
