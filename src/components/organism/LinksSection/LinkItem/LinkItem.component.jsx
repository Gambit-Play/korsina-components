import { LinkIcon, LinkLabel, Link } from '../LinksSection.styles';
import { NotificationBadge } from '../../../atoms/Notification/Notification.styles';

export const LinkItem = ({
	hasNotification,
	icon,
	label,
	notificationNumber,
}) => {
	return (
		<Link>
			<LinkIcon hasNotification={hasNotification}>
				<div className='notification'></div>
				{icon}
			</LinkIcon>
			<LinkLabel>{label}</LinkLabel>
			{hasNotification && (
				<NotificationBadge>{notificationNumber}</NotificationBadge>
			)}
		</Link>
	);
};
