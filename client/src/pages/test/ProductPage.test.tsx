import { render, screen } from '@testing-library/react';
import ProductPage from '../ProductPage';
import { useQuery, QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();


import { BrowserRouter } from 'react-router-dom';

describe('LoginPage Component', () => {
	it('should render', () => {
		render(
			<BrowserRouter>
				<QueryClientProvider client={queryClient}>
					<ProductPage />
				</QueryClientProvider>
			</BrowserRouter>
		);
	});
});
