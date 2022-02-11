import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchField from '../SearchField';
import { BrowserRouter } from 'react-router-dom';

describe('Logo Component', () => {
	it('should render', () => {
		render(<SearchField/>);
	});


});