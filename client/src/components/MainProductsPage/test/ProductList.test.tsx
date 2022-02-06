import { render, screen } from '@testing-library/react';

import { BrowserRouter, Routes } from 'react-router-dom';
import { useQuery, QueryClient, QueryClientProvider } from 'react-query';
import ProductList from '../ProductList';

const queryClient = new QueryClient();

describe('login Component', () => {
    
	function useCustomHook() {
		return useQuery('customHook', () => 'Hello');
	}

	const ProductListWrapper = () => (
		<BrowserRouter>
			<QueryClientProvider client={queryClient}>
				<ProductList />
			</QueryClientProvider>
		</BrowserRouter>
	);

	it('should render', () => {
		render(<ProductListWrapper />);
	});

});
