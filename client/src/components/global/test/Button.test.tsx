import { render, screen } from '@testing-library/react';
import { RiShoppingCartLine } from 'react-icons/ri';
import Button from '../Button';

describe('Logo Component', () => {
	it('should render', () => {
		render(<Button clickHandler={() => jest.mock} isDisabled={false} text={'skicka'} />);
	});

	it('should have text content sent with props (skicka)', () => {
		render(<Button clickHandler={() => jest.mock} isDisabled={false} text={'skicka'} />);

		const button = screen.getByRole('button');
		expect(button).toHaveTextContent(/skicka/i);
	});

	it('should should not be clickable when disabled', () => {
		render(<Button clickHandler={() => jest.mock} isDisabled={true} text={'skicka'} />);

		const button = screen.getByRole('button');
		expect(button).toBeDisabled();
	});
});
