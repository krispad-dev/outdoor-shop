import { render, screen } from "@testing-library/react";
import MainProductsPage from '../MainProductsPage'
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';

const queryClient = new QueryClient();

describe('MainProductPage Component', () => {

    function MainProductPageWrapper() {
		return (
			<BrowserRouter>
				<QueryClientProvider client={queryClient}>
					<MainProductsPage />
				</QueryClientProvider>
			</BrowserRouter>
		);
	}

    it('should render', () => {
        render(<MainProductPageWrapper/>)
    })

}) 