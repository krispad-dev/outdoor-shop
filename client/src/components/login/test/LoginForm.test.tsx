import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginForm from '../LoginForm';
import { BrowserRouter } from 'react-router-dom';

import useLoginUser from '../../../modules/auth/useLoginUser';
jest.mock('../../../modules/auth/useLoginUser');
const useLoginUserMock = useLoginUser as jest.Mock<any>;

describe('login Component', () => {
	const ReactQueryResponseMock = () => (
		<BrowserRouter>
			<LoginForm />
		</BrowserRouter>
	);

	const mockMutate = jest.fn();

	useLoginUserMock.mockReturnValue({
		mutate: mockMutate,
		data: { error: 'Ingen användare hittas med angiven epost', type: 'email' },
		success: false,
	});

	it('should render component with logo', () => {
		render(<ReactQueryResponseMock />);
	});

	it('should have two input fields ("epost, "lösenord")', () => {
		render(<ReactQueryResponseMock />);

		const email = screen.getByLabelText(/epost/i);
		const password = screen.getByLabelText(/lösenord/i);

		expect(email).toBeInTheDocument();
		expect(password).toBeInTheDocument();
	});

	it('should have a button ("LOGGA IN")', () => {
		render(<ReactQueryResponseMock />);

		const button = screen.getByRole('button', { name: /logga in/i });

		expect(button).toBeInTheDocument();
	});

	it('should give informative error message when credentials do not match', () => {
		render(<ReactQueryResponseMock />);

		const email = screen.getByLabelText(/epost/i);
		const password = screen.getByLabelText(/lösenord/i);
		userEvent.type(email, 'testuser@testuser.com');
		userEvent.type(password, '1234567');
		const button = screen.getByRole('button', { name: /logga in/i });
		userEvent.click(button);

		expect(mockMutate).toHaveBeenCalledTimes(1);
		const errMessage = screen.getByText(/ingen användare hittas med angiven epost/i);

		expect(errMessage).toBeInTheDocument();
	});

	it('should inform me about invalid email input', () => {
		render(<ReactQueryResponseMock />);

		const email = screen.getByLabelText(/epost/i);
		userEvent.type(email, 'testuser_testuserm');
		const helperText = screen.getByText(/Använd formatet: namn@dinmejl\.se/i);

		expect(helperText).toBeInTheDocument()

	});

	it('should inform me about invalid password input', () => {
		render(<ReactQueryResponseMock />);

		const password = screen.getByLabelText(/lösenord/i);
		userEvent.type(password, '234');
		const helperText = screen.getByText(/minst sex tecken/i);

		expect(helperText).toBeInTheDocument()

	});

	 	it('should only let me submit my information when field input is valid', () => {
		render(<ReactQueryResponseMock />);

		const button = screen.getByRole('button', { name: /logga in/i });

		expect(button).toBeDisabled()

		const email = screen.getByLabelText(/epost/i);
		const password = screen.getByLabelText(/lösenord/i);

		userEvent.type(password, 'validinput');
		userEvent.type(email, 'validInput@validinput.com');

		expect(button).not.toBeDisabled()

		userEvent.click(button);

		expect(mockMutate).toHaveBeenCalledTimes(2);
	}); 
})
