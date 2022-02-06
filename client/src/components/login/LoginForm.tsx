import React, { useEffect, useState } from 'react';

import TextField from '@mui/material/TextField';
import styled from 'styled-components';
import Button from '../global/Button';
import { LoginUser } from '../../modules/auth/useLoginUser';

import useLoginUser from '../../modules/auth/useLoginUser';
import BtnSpinner from '../global/loaders/BtnSpinner';
import { useNavigate } from 'react-router-dom';

import { isEmpty } from '../../helpers/validators';

export default function LoginForm() {
	const navigate = useNavigate();

	const { mutate, data, isLoading } = useLoginUser();
	const [formData, setFormData] = useState<LoginUser>({ email: '', password: '' });

	const [errorMessage, setErrorMessage] = useState('');
	const [isError, setIsError] = useState(false);

	function submitHandler(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();

		if (isEmpty(formData.email || formData.password)) {
			setErrorMessage('Fel - fält kan inte vara tomt');
			setIsError(true);
		} else {
			mutate(formData);
		}
	}

	useEffect(() => {
		if (data?.success) {
			setIsError(false);
			setErrorMessage(`Inloggning lyckades - Välkommen`);
		}

	}, [data?.success]);

	return (
		<OuterContainer>
			<h2 className='logo'>outdoor</h2>
			<form action='submit' onSubmit={e => submitHandler(e)}>
				<TextField
					error={isError || data?.success === false}
					margin='normal'
					id='email'
					label='Epost'
					variant='outlined'
					placeholder='Epost'
					onChange={e => setFormData({ ...formData, [e.target.id]: e.target.value })}
					name='email'
				/>

				<TextField
					error={isError || data?.success === false}
					margin='normal'
					id='password'
					label='Lösenord'
					variant='outlined'
					placeholder='Lösenord'
					helperText={data?.error ? data?.error : errorMessage}
					onChange={e => setFormData({ ...formData, [e.target.id]: e.target.value })}
					name='password'
					type={'password'}
				/>

				<Button
					spinner={<BtnSpinner />}
					text='LOGGA IN'
					isDisabled={false}
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
