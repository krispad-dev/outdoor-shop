import React from 'react';
import { screen, render } from '@testing-library/react';
import App from './App';

import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

describe('App component', () => {
	it('should render', () => {
		render(
			<QueryClientProvider client={queryClient}>
				<App />
			</QueryClientProvider>
		);
	});
});
