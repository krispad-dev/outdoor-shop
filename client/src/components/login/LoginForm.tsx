import React, { useState } from 'react';

import TextField from '@mui/material/TextField';
import styled from 'styled-components';
import Button from '../global/Button';
import { LoginUser } from '../../modules/auth/useLoginUser';

import useLoginUser from '../../modules/auth/useLoginUser';
import BtnSpinner from '../global/loaders/BtnSpinner';

import { isValidEmail, isValidPassword, loginSchema } from '../../helpers/validators';

export default function LoginForm() {
	const { mutate, data, isLoading } = useLoginUser();
	const [formData, setFormData] = useState<LoginUser>({ email: '', password: '' });


	function submitHandler(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		mutate(formData);
	}

	const emailHelperText = isValidEmail(formData.email)
		? isValidEmail(formData.email)
		: data?.type === 'email'
		? data?.error
		: ' ';

	const pwdHelperText = isValidPassword(formData.password)
		? isValidPassword(formData.password)
		: data?.type === 'password'
		? data?.error
		: ' ';

	return (
		<OuterContainer>
			<h2 className='logo'>outdoor</h2>
			<form action='submit' onSubmit={e => submitHandler(e)}>
				<TextField
					autoComplete='true'
					error={data?.success === false}
					margin='normal'
					id='email'
					label='Epost'
					variant='outlined'
					placeholder='Epost'
					helperText={emailHelperText}
					onChange={e => setFormData({ ...formData, [e.target.id]: e.target.value })}
					name='email'
				/>

				<TextField
					autoComplete='true'
					error={data?.success === false}
					margin='normal'
					id='password'
					label='Lösenord'
					variant='outlined'
					placeholder='Lösenord'
					helperText={pwdHelperText}
					onChange={e => setFormData({ ...formData, [e.target.id]: e.target.value })}
					name='password'
					type={'password'}
				/>

				<Button
					spinner={<BtnSpinner />}
					text={data?.success ? 'välkommen' : 'logga in'}
					isDisabled={!loginSchema.isValidSync(formData)}
					isLoading={isLoading}
				/>
			</form>
		</OuterContainer>
	);
}

const OuterContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: ${props => props.theme.cardColor};
	height: 60vh;
	width: 40vw;
	min-width: 20rem;
	max-width: 30rem;
	border-radius: 5px;
	box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
	opacity: 97%;
	padding: 3rem 0rem;

	form {
		width: 15rem;
	}

	input {
		width: 13.3rem;
	}

	h2.logo {
		color: ${props => props.theme.accentColor};
		font-size: 4rem;
	}
`;
