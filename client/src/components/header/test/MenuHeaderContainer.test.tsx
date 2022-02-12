import { render } from '@testing-library/react';
import MenuHeader from '../MenuHeader';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

describe('MenuHeaderContainer component', () => {
	it('should render', () => {
		render(
			<QueryClientProvider client={queryClient}>
				<MenuHeader />
			</QueryClientProvider>
		);
	});
});
