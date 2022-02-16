import styled from 'styled-components';

const PageContainer = styled.section<{ bgImage?: string }>`
	width: 95%;
	height: 95%;
	overflow-y: scroll;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	background-image: url(${props => props.bgImage});

	display: flex;
	justify-content: center;
	align-items: center;


	::-webkit-scrollbar {
		display: none;
	}

	-ms-overflow-style: none;
	scrollbar-width: none;
`;

export default PageContainer;
