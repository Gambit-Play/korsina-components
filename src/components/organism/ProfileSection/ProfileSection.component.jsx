import { AvatarImage } from '../../atoms/Avatar/Avatar.styles';
import { Box } from '../../atoms/Box/Box.styles';
import {
	ProfileBlock,
	ProfileName,
	ProfileDepartment,
} from './ProfileSection.styles';

export const ProfileSection = ({ userName, userDepartment, image }) => {
	return (
		<ProfileBlock>
			<Box centerLeft>
				<AvatarImage image={image} size={30} className='avatar' />
				<Box vertical>
					<ProfileName>{userName}</ProfileName>
					<ProfileDepartment>{userDepartment}</ProfileDepartment>
				</Box>
			</Box>
		</ProfileBlock>
	);
};
