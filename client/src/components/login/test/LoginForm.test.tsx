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

	beforeEach(() => {
		useLoginUserMock.mockReturnValue({
			mutate: jest.fn(),
			data: { error: 'Ingen användare hittas med angiven epost' },
			success: false,
		});
	});

	it('should render component with logo', () => {
		render(<ReactQueryResponseMock />);
	});

	it('should have two input fields ("epost, "lösenord")', () => {
		render(<ReactQueryResponseMock />);

		const email = screen.getByLabelText('Epost');
		const password = screen.getByLabelText('Lösenord');

		expect(email).toBeInTheDocument();
		expect(password).toBeInTheDocument();
	});

	it('should have a button ("LOGGA IN")', () => {
		render(<ReactQueryResponseMock />);

		const button = screen.getByRole('button', { name: /LOGGA IN/ });

		expect(button).toBeInTheDocument();
	});

	it('should give informative error message when incorrect password or email is passed', () => {
		render(<ReactQueryResponseMock />);

		const email = screen.getByLabelText('Epost');
		const password = screen.getByLabelText('Lösenord');

		userEvent.type(password, 'aWorngPassword');
		userEvent.type(email, 'aWrongEmail');

		const button = screen.getByRole('button', { name: /LOGGA IN/ });
		userEvent.click(button);

		const errMessage = screen.getByText('Ingen användare hittas med angiven epost');

		expect(errMessage).toHaveTextContent('Ingen användare hittas med angiven epost');
	});

	it('should give informative error message when no input is passed', () => {
		render(<ReactQueryResponseMock />);

		const button = screen.getByRole('button', { name: /LOGGA IN/ });

		const email = screen.getByLabelText('Epost');
		const password = screen.getByLabelText('Lösenord');

		userEvent.type(password, '{selectall}{backspace}');
		userEvent.type(email, '{selectall}{backspace}');

		userEvent.click(button);
		const errMessage = screen.getByText('Fel - fält kan inte vara tomt');

		expect(errMessage).toBeInTheDocument();
	});
});
