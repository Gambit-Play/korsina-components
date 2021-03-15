import { LinksBlock } from './LinksSection.styles';
import { ReactComponent as MenuIcon } from '../../../assets/food-menu.svg';
import { LinkItem } from './LinkItem/LinkItem.component';

export const LinksSection = () => {
	return (
		<LinksBlock>
			<LinkItem
				hasNotification={true}
				icon={<MenuIcon />}
				label='Menu'
				notificationNumber='9'
			/>
			<LinkItem
				hasNotification={false}
				icon={<MenuIcon />}
				label='Menu'
				notificationNumber='9'
			/>
			<LinkItem
				hasNotification={false}
				icon={<MenuIcon />}
				label='Menu'
				notificationNumber='9'
			/>
			<LinkItem
				hasNotification={true}
				icon={<MenuIcon />}
				label='Menu'
				notificationNumber='9'
			/>
		</LinksBlock>
	);
};
