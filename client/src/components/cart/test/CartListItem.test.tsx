import { render } from '@testing-library/react';
import CartListItem from '../CartListItem';
import { mockCart } from './mockCart'

describe('CartModule Component', () => {
	it('should render', () => {
		render(<CartListItem {...mockCart} />);
	});
});
