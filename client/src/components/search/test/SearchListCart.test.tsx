import { render } from '@testing-library/react';
import SearchField from '../SearchField';

import { mockData } from './MockData'

describe('SearchField Component', () => {
	it('should render', () => {
		render(<SearchField key={1} {...mockData[0]}/>);
	});
});