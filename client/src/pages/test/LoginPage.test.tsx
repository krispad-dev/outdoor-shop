import { render, screen } from '@testing-library/react';
import LoginPage from '../LoginPage';
import { useQuery, QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();


import { BrowserRouter, Routes } from 'react-router-dom';

describe('LoginPage Component', () => {
	it('should render', () => {
		render(
			<BrowserRouter>
				<QueryClientProvider client={queryClient}>
					<LoginPage />
				</QueryClientProvider>
			</BrowserRouter>
		);
	});
});
