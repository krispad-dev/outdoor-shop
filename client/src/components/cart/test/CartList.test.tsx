import { render } from '@testing-library/react';
import CartItemList from '../CartItemList';
import { mockCart } from './mockCart';

import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

describe('CartModule Component', () => {
	it('should render', () => {
		render(
			<QueryClientProvider client={queryClient}>
				<CartItemList cartItems={mockCart} />
			</QueryClientProvider>
		);
	});
});
