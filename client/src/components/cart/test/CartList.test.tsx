import { render } from '@testing-library/react';
import CartItemList from '../CartItemList';

describe('CartModule Component', () => {
	it('should render', () => {
		render(<CartItemList />);
	});
});
