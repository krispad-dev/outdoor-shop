import styled from 'styled-components'

const StyledFormContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: ${props => props.theme.cardColor};

	width: 40vw;
	min-width: 20rem;
	max-width: 30rem;
	border-radius: 5px;
	box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
	opacity: 97%;
	padding: 3rem 0rem;

	form {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	h2.logo {
		color: ${props => props.theme.accentColor};
		font-size: 4rem;
	}
`;

export default StyledFormContainer