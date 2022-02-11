import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchField from '../SearchField';
import { BrowserRouter } from 'react-router-dom';

describe('Logo Component', () => {
	it('should render', () => {
		render(<SearchField/>);
	});

	it('should be able to type in the search filed"', () => {
		render(<SearchField/>);

		const searchField = screen.getByRole('textbox');
        userEvent.type(searchField, 'hello world') 

		expect(searchField).toHaveValue(/hello world/i);
	});
});