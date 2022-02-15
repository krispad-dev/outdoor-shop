import styled from 'styled-components';

const PageContainer = styled.section`
	width: 95%;
	height: 95%;
	overflow-y: scroll;

	::-webkit-scrollbar {
		display: none;
	}

	-ms-overflow-style: none;
	scrollbar-width: none;
`;

export default PageContainer;
