import { render, screen } from '@testing-library/react';
import Logo from '../Logo';
import { BrowserRouter } from 'react-router-dom';

describe('Logo Component', () => {
	it('should render', () => {
		render(
			<BrowserRouter>
				<Logo />
			</BrowserRouter>
		);
	});

	it('should hav text content "outdoor"', () => {
		render(
			<BrowserRouter>
				<Logo />
			</BrowserRouter>
		);

		const heading = screen.getByRole('heading');
		expect(heading).toHaveTextContent(/outdoor/i);
	});
});
