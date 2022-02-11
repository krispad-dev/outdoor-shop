import { render } from '@testing-library/react';
import { mockData } from './MockData';

import SearchList from '../SearchList';
import { BrowserRouter } from 'react-router-dom';

describe('SearchList Component', () => {
	it('should render', () => {
		render(
			<BrowserRouter>
				<SearchList products={mockData} />
			</BrowserRouter>
		);
	});
});
