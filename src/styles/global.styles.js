import { css } from 'styled-components';

// Funstion Styles
export const functionStyles = {
	// Unit: px
	radiusPX: numberInPX => `${numberInPX * 2}px`,
	spacingPX: numberInPX => `${numberInPX * 2}px`,
	fontSizePX: numberInPX => `${numberInPX * 2}px`,

	// Unit: %
	radiusPRCT: numberInPRCT => `${numberInPRCT}%`,
	spacingPRCT: numberInPRCT => `${numberInPRCT}%`,
	fontSizePRCT: numberInPRCT => `${numberInPRCT}%`,

	// Unit: rem
	radiusREM: numberInPX => `${numberInPX / 16}rem`,
	spacingREM: numberInPX => `${numberInPX / 16}rem`,
	fontSizeREM: numberInPX => `${numberInPX / 16}rem`,
};

// Global Color Styles
export const colorStyles = {
	primary: '#04A9F5',
	seconsary: '#1DE9B6',

	// Background Colors
	bgPrimary: css`
		background: linear-gradient(225deg, #1de9b6 0%, #1dc4e9 100%);
	`,
	bgSecondary: css`
		background: linear-gradient(225deg, #a389d4 0%, #899ed4 100%);
	`,
	bgNone: css`
		background: none;
	`,
	bgColor1: css`
		background: linear-gradient(225deg, #04a9f5 0%, #049df5 100%);
	`,

	// State Colors
	success: '#4caf50',
	warning: '#F5C22B',
	error: '#F44236',
	info: '#04A9F5',

	// Greyscale Colors
	greyScale1: '#202224',
	greyScale2: '#393C40',
	greyScale3: '#474B4F',
	greyScale4: '#6F7379',
	greyScale5: '#AAAEB3',
	greyScale6: '#C6CACF',
	greyScale7: '#EBEBEB',
	greyScale8: '#ECEDEF',
	greyScale9: '#FFFFFF',
};

// Global Text Styles
export const textStyles = {
	heading1: css`
		font-family: 'Open Sans', sans-serif;
		font-weight: 300;
		font-size: ${functionStyles.fontSizeREM(44)};
	`,
	heading2: css`
		font-family: 'Open Sans', sans-serif;
		font-weight: 300;
		font-size: ${functionStyles.fontSizeREM(26)};
	`,
	heading3: css`
		font-family: 'Open Sans', sans-serif;
		font-weight: 300;
		font-size: ${functionStyles.fontSizeREM(18)};
		letter-spacing: 1.25px;
	`,
	heading4: css`
		font-family: 'Open Sans', sans-serif;
		font-weight: 300;
		font-size: ${functionStyles.fontSizeREM(12)};
		letter-spacing: 0.4px;
	`,
	heading5: css`
		font-family: 'Open Sans', sans-serif;
		font-weight: 600;
		font-size: ${functionStyles.fontSizeREM(10)};
		letter-spacing: 1.5px;
	`,
	button: css`
		font-family: 'Open Sans', sans-serif;
		font-weight: 600;
		font-size: ${functionStyles.fontSizeREM(10)};
		letter-spacing: 1.25px;
	`,
};

// Global Alignment Styles
export const alignStyles = {
	topLeft: css`
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
	`,
	topCenter: css`
		display: flex;
		justify-content: center;
		align-items: flex-start;
	`,
	topRight: css`
		display: flex;
		justify-content: flex-end;
		align-items: flex-start;
	`,
	centerLeft: css`
		display: flex;
		justify-content: flex-start;
		align-items: center;
	`,
	center: css`
		display: flex;
		justify-content: center;
		align-items: center;
	`,
	centerRight: css`
		display: flex;
		justify-content: flex-end;
		align-items: center;
	`,
	bottomLeft: css`
		display: flex;
		justify-content: flex-start;
		align-items: flex-end;
	`,
	bottomCenter: css`
		display: flex;
		justify-content: center;
		align-items: flex-end;
	`,
	bottomRight: css`
		display: flex;
		justify-content: flex-end;
		align-items: flex-end;
	`,
	vertical: css`
		display: flex;
		flex-direction: column;
	`,
};

// Global Mrgin Styles
export const marginStyles = {
	margin: margin => css`
		margin: ${functionStyles.spacingPX(margin)};
	`,
	marginTop: marginTop => css`
		margin-top: ${functionStyles.spacingPX(marginTop)};
	`,
	marginLeft: marginLeft => css`
		margin-left: ${functionStyles.spacingPX(marginLeft)};
	`,
	marginBottom: marginBottom => css`
		margin-bottom: ${functionStyles.spacingPX(marginBottom)};
	`,
	marginRight: marginRight => css`
		margin-right: ${functionStyles.spacingPX(marginRight)};
	`,
	marginX: marginX => css`
		margin-left: ${functionStyles.spacingPX(marginX)};
		margin-right: ${functionStyles.spacingPX(marginX)};
	`,
	marginY: marginY => css`
		margin-top: ${functionStyles.spacingPX(marginY)};
		margin-bottom: ${functionStyles.spacingPX(marginY)};
	`,
};

// Global Padding Styles
export const paddingStyles = {
	padding: padding => css`
		padding: ${functionStyles.spacingPX(padding)};
	`,
	paddingTop: paddingTop => css`
		padding-top: ${functionStyles.spacingPX(paddingTop)};
	`,
	paddingLeft: paddingLeft => css`
		padding-left: ${functionStyles.spacingPX(paddingLeft)};
	`,
	paddingBottom: paddingBottom => css`
		padding-bottom: ${functionStyles.spacingPX(paddingBottom)};
	`,
	paddingRight: paddingRight => css`
		padding-right: ${functionStyles.spacingPX(paddingRight)};
	`,
	paddingX: paddingX => css`
		padding-left: ${functionStyles.spacingPX(paddingX)};
		padding-right: ${functionStyles.spacingPX(paddingX)};
	`,
	paddingY: paddingY => css`
		padding-top: ${functionStyles.spacingPX(paddingY)};
		padding-bottom: ${functionStyles.spacingPX(paddingY)};
	`,
};

// Global Size Styles
export const sizeStyles = {
	heightPX: height => css`
		height: ${functionStyles.spacingPX(height)};
	`,
	widthPX: width => css`
		width: ${functionStyles.spacingPX(width)};
	`,
	sizePX: size => css`
		height: ${functionStyles.spacingPX(size)};
		width: ${functionStyles.spacingPX(size)};
	`,
};

// Gloabal Shadow Styles
export const shadowStyles = {
	shadow1: css`
		box-shadow: 0 4px 10px 0 rgb(0 0 0 / 32%);
	`,
	shadow2: css`
		box-shadow: 0 8px 16px 0 rgb(0 0 0 / 32%);
	`,
};

// Gloabal Border Styles
export const borderStyles = {
	borderRadius1: css`
		border-radius: ${functionStyles.radiusPX(2)};
	`,
	borderNone: css`
		border: none;
	`,
	border1: borderColor => css`
		border: 1px solid ${borderColor};
	`,
};

export const animationStyles = {
	animation1: '300ms cubic-bezier(0.25, 0.8, 0.25, 1)',
};
