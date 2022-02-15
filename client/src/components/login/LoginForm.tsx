import { useState } from 'react';
import { LoginUser } from '../../modules/auth/useLoginUser';
import { isValidEmail, isValidPassword, loginSchema } from '../../helpers/validators';

import TextField from '@mui/material/TextField';
import Button from '../global/Button';
import useLoginUser from '../../modules/auth/useLoginUser';
import BtnSpinner from '../global/loaders/BtnSpinner';
import StyledFormContainer from '../../styled-components/StyledFormContainer';

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
		<StyledFormContainer>
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
		</StyledFormContainer>
	);
}
