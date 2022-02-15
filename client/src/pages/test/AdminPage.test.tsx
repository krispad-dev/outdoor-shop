import { render } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { mockData } from './MockData';
import { BrowserRouter } from 'react-router-dom';

import AdminPage from '../AdminPage'

import { useWindowSize } from '@react-hook/window-size';
jest.mock('@react-hook/window-size');
const useWindowSizeMock = useWindowSize as jest.Mock<any>;

import useGetProducts from '../../modules/products/useGetProducts';
jest.mock('../../modules/products/useGetProducts');
const useGetProductsMock = useGetProducts as jest.Mock<any>;

const queryClient = new QueryClient();

describe('AdminPage Component', () => {

	useWindowSizeMock.mockImplementation(() => ([ 1000 ]));

	useGetProductsMock.mockImplementation(() => ({
		data: { data: [mockData] },
		success: false,
	}));


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
