import styled from 'styled-components';
import {
	alignStyles,
	marginStyles,
	paddingStyles,
	sizeStyles,
} from '../../styles/global.styles';

export const Box = styled.div`
	// Size properties
	${props => props.height && sizeStyles.heightPX(props.height)}
	${props => props.width && sizeStyles.widthPX(props.width)}
	${props => props.size && sizeStyles.sizePX(props.size)}

	// Margin properties
	${props => props.margin && marginStyles.margin(props.margin)}
	${props => props.marginTop && marginStyles.marginTop(props.marginTop)}
	${props => props.marginLeft && marginStyles.marginLeft(props.marginLeft)}
	${props => props.marginBottom && marginStyles.marginBottom(props.marginBottom)}
	${props => props.marginRight && marginStyles.marginRight(props.marginRight)}

	// Padding properties
	${props => props.padding && paddingStyles.padding(props.padding)}
	${props => props.paddingTop && paddingStyles.paddingTop(props.paddingTop)}
	${props => props.paddingLeft && paddingStyles.paddingLeft(props.paddingLeft)}
	${props =>
		props.paddingBottom && paddingStyles.paddingBottom(props.paddingBottom)}
	${props => props.paddingRight && paddingStyles.paddingRight(props.paddingRight)}

	// Alignment properties
	${props => props.topLeft && alignStyles.topLeft}
	${props => props.topCenter && alignStyles.topCenter}
	${props => props.topRight && alignStyles.topRight}
	${props => props.centerLeft && alignStyles.centerLeft}
	${props => props.center && alignStyles.center}
	${props => props.centerRight && alignStyles.centerRight}
	${props => props.bottomLeft && alignStyles.bottomLeft}
	${props => props.bottomCenter && alignStyles.bottomCenter}
	${props => props.bottomRight && alignStyles.bottomRight}

	// Orientation properties
	${props => props.vertical && alignStyles.vertical}
`;
