import React from 'react';
import LoginForm from '../components/login/LoginForm';
import styled from 'styled-components';

export default function LoginPage() {
	return (
		<OuterContainer>
			<LoginForm />
		</OuterContainer>
	);
}

const OuterContainer = styled.section`
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	background-image: url(https://images.unsplash.com/photo-1500220959218-81a28e9292d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80);
`;
