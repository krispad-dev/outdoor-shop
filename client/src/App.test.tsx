import React from 'react';
import { screen, render } from '@testing-library/react';
import App from './App';

import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';

const queryClient = new QueryClient();

describe('App component', () => {


	function AppComponentTestWrapper() {
		return (
			<BrowserRouter>
				<QueryClientProvider client={queryClient}>
					<App />
				</QueryClientProvider>
			</BrowserRouter>
		);
	}
	

	it('should render', () => {
		render(<AppComponentTestWrapper />);
	});
});
