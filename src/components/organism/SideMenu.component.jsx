import { SideMenuBlock } from './SideMenu.styles';
import { ProfileSection } from './ProfileSection/ProfileSection.component';
import { LinksSection } from './LinksSection/LinksSection.component';

export const SideMenu = ({ userName, userDepartment, image }) => {
	return (
		<SideMenuBlock>
			<ProfileSection
				image={image}
				userName={userName}
				userDepartment={userDepartment}
			/>
			<LinksSection />
		</SideMenuBlock>
	);
};
