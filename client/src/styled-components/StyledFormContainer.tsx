import styled from 'styled-components';

const StyledFormContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: ${props => props.theme.cardColor};

	border-radius: 5px;
	box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
	opacity: 97%;
	padding: 2rem;

	form {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;

		overflow: scroll;

		::-webkit-scrollbar {
			display: none;
		}
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}

	h2.logo {
		color: ${props => props.theme.accentColor};
		font-size: 2rem;
	}
`;

export default StyledFormContainer;
