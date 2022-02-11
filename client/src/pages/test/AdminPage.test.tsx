import { render } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import AdminPage from '../AdminPage'
const queryClient = new QueryClient();

import { BrowserRouter } from 'react-router-dom';

describe('AdminPage Component', () => {
	it('should render', () => {
		render(
			<BrowserRouter>
				<QueryClientProvider client={queryClient}>
					<AdminPage />
				</QueryClientProvider>
			</BrowserRouter>
		);
	});
});
