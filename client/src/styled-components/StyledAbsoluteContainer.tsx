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
`;

export default StyledAbsoluteContainer
