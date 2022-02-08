import { render } from '@testing-library/react';
import CartListItem from '../CartListItem';

describe('CartModule Component', () => {
	it('should render', () => {
		render(<CartListItem />);
	});
});
