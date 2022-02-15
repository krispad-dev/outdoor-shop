import styled from 'styled-components';

const StyledAbsoluteContainer = styled.section<{ bgImage: string }>`
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	background-image: url(${props => props.bgImage});
	overflow: hidden;

	width: 100%;
	a {
		font-size: 1.5rem;
		font-weight: 600;
		color: ${ props => props.theme.accentColor };
		left:0rem;
		bottom: 3rem;
		position: unset;
	}

	div.header-container {
		width: 70%;
		display: flex;
		justify-content: space-around;
	}
`;

export default StyledAbsoluteContainer
