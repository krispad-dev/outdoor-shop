import { render, screen } from '@testing-library/react';
import ProductPage from '../ProductPage';
import { useQuery, QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();


import { BrowserRouter } from 'react-router-dom';

describe('ProductPage Component', () => {
	it('should render', () => {
		render(
			<BrowserRouter>
				<QueryClientProvider client={queryClient}>
					<ProductPage isLoggedIn={true} />
				</QueryClientProvider>
			</BrowserRouter>
		);
	});
});
