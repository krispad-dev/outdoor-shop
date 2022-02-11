import { getAllByRole, render, screen } from '@testing-library/react';
import { mockData } from './MockData';
import { QueryClient, QueryClientProvider } from 'react-query';

import { BrowserRouter } from 'react-router-dom';
import { UiStateContext } from '../../../context/UiStateContext';
import { useReducer } from 'react';
import { UiReducer } from '../../../context/UiReducer';

import userEvent from '@testing-library/user-event';
import Search from '../Search';

import useGetProducts from '../../../modules/products/useGetProducts'

jest.mock('../../../modules/products/useGetProducts');
const useGetProductsMock = useGetProducts as jest.Mock<any>;

const queryClient = new QueryClient();

describe('Search component', () => {

	beforeEach(() => {
		useGetProductsMock.mockImplementation(() => ({
			data: { data: mockData },
			success: false,
		}));
	});

	function ComponentWrappedInContext() {
		const initialState = {
			headerMenuIsOpen: false,
			userAuthState: { success: false, data: {} },
			searchString: '',
		};

		const [state, dispatch] = useReducer(UiReducer, initialState);

		return (
			<UiStateContext.Provider value={{ state, dispatch }}>
				<BrowserRouter>
					<Search />
				</BrowserRouter>
			</UiStateContext.Provider>
		);
	}

	it('should render', () => {
		render(
			<QueryClientProvider client={queryClient}>
				<ComponentWrappedInContext />
			</QueryClientProvider>
		);
	});

	it('should filter product suggestions according to user input (sort products by product name) not case sensitive', () => {
		render(
			<QueryClientProvider client={queryClient}>
				<ComponentWrappedInContext />
			</QueryClientProvider>
		);
		const inputField = screen.getByRole('textbox');

		userEvent.type(inputField, 'bA');

		const filteredProducts = screen.getAllByRole('button');

		expect(filteredProducts).toHaveLength(2);
		expect(filteredProducts[0]).toHaveTextContent(/large backpack/);
		expect(filteredProducts[1]).toHaveTextContent(/backpack medium/);
	});

	describe('search input field', () => {
		it('should be able to take user input', () => {
			render(
				<QueryClientProvider client={queryClient}>
					<ComponentWrappedInContext />
				</QueryClientProvider>
			);
			const inputField = screen.getByRole('textbox');

			userEvent.type(inputField, 'hello world');

			expect(inputField).toHaveValue('hello world');
		});
	});
});
