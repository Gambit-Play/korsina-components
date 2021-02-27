import { css } from 'styled-components';

// Funstion styles
export const functionStyles = {
	// Unit: px
	radiusPX: number => `${number * 2}px`,
	spacingPX: number => `${number * 2}px`,
	fontSizePX: number => `${number * 2}px`,

	// Unit: %
	radiusPRCT: number => `${number}%`,
	spacingPRCT: number => `${number}%`,
	fontSizePRCT: number => `${number}%`,
};

// Global color styles
export const colorStyles = {
	// Colors Background
	bgPrimary: css`
		background-color: linear-gradient(225deg, #1de9b6 0%, #1dc4e9 100%);
	`,
	bgSecondary: css`
		background-color: linear-gradient(225deg, #a389d4 0%, #899ed4 100%);
	`,
	bgColor1: css`
		background-color: linear-gradient(225deg, #04a9f5 0%, #049df5 100%);
	`,

	// Greyscale
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

// Global text styles
export const textStyles = {
	heading1: css`
		font-family: 'Open Sans', sans-serif;
		font-weight: 300;
		font-size: 44px;
	`,
	heading2: css`
		font-family: 'Open Sans', sans-serif;
		font-weight: 300;
		font-size: 26px;
	`,
	heading3: css`
		font-family: 'Open Sans', sans-serif;
		font-weight: 300;
		font-size: 18px;
	`,
	heading4: css`
		font-family: 'Open Sans', sans-serif;
		font-weight: 300;
		font-size: 12px;
	`,
	heading5: css`
		font-family: 'Open Sans', sans-serif;
		font-weight: 600;
		font-size: 10px;
	`,
	button: css`
		font-family: 'Open Sans', sans-serif;
		font-weight: 600;
		font-size: 10px;
	`,
};

// Global alignment styles
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

// Global margin styles
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
};

// Global padding styles
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
};

// Global size styles
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
