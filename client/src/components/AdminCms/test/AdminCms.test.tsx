import { render, screen } from '@testing-library/react';
import { mockData } from './MockData';
import { QueryClient, QueryClientProvider } from 'react-query';
import { UiStateContext } from '../../../context/UiStateContext';
import { useReducer } from 'react';
import { UiReducer } from '../../../context/UiReducer';
import { BrowserRouter } from 'react-router-dom';

import AdminCms from '../AdminCms';
import userEvent from '@testing-library/user-event';

import useGetProducts from '../../../modules/products/useGetProducts';
jest.mock('../../../modules/products/useGetProducts');
const useGetProductsMock = useGetProducts as jest.Mock<any>;

import useDeleteProduct from '../../../modules/products/useDeleteProduct';
jest.mock('../../../modules/products/useDeleteProduct');
const useDeleteProductMock = useDeleteProduct as jest.Mock<any>;

import useUpdateProduct from '../../../modules/products/useUpdateProduct';
jest.mock('../../../modules/products/useUpdateProduct');
const useUpdateProductMock = useUpdateProduct as jest.Mock<any>;

import useAddProduct from '../../../modules/products/useAddProduct';
jest.mock('../../../modules/products/useAddProduct');
const useAddProductMock = useAddProduct as jest.Mock<any>;

import { useWindowSize } from '@react-hook/window-size';
jest.mock('@react-hook/window-size');
const useWindowSizeMock = useWindowSize as jest.Mock<any>;

const queryClient = new QueryClient();

describe('AdminCms Component', () => {


	function ComponentWrappedInContext() {
		const initialState = {
			headerMenuIsOpen: false,
			userAuthState: { success: false, data: {} },
			searchString: '',
			adminMode: 'new',
			productToUpdate: null,
			snackMessage: '',
			snackIsActive: false,
		};

		const [state, dispatch] = useReducer(UiReducer, initialState);

		return (
			<UiStateContext.Provider value={{ state, dispatch }}>
				<BrowserRouter>
					<AdminCms />
				</BrowserRouter>
			</UiStateContext.Provider>
		);
	}

	const deleteMutateMock = jest.fn();
	const updateMutateMock = jest.fn();
	const addMutateMock = jest.fn();

	useGetProductsMock.mockImplementation(() => ({
		data: { data: mockData },
		success: false,
	}));

	useDeleteProductMock.mockImplementation(() => ({
		mutate: deleteMutateMock,
		data: { data: mockData },
		success: false,
	}));

	useUpdateProductMock.mockImplementation(() => ({
		mutate: updateMutateMock,
		data: { data: mockData },
		success: false,
	}));

	useAddProductMock.mockImplementation(() => ({
		mutate: addMutateMock,
		data: { data: mockData },
		success: false,
	}));

	useWindowSizeMock.mockImplementation(() => ([ 1000 ]));


	it('should render', () => {
		render(
			<QueryClientProvider client={queryClient}>
				<ComponentWrappedInContext />
			</QueryClientProvider>
		);
	});

	it(`should always render initial ui elements, (add mode)
		* update/add switch component
		* logo "admin" header
		* Seven (7) typeable input fields'
	`, () => {
		render(
			<QueryClientProvider client={queryClient}>
				<ComponentWrappedInContext />
			</QueryClientProvider>
		);

		screen.getByRole('button', { name: /skapa/i });

		screen.getByText(/ändra/i);
		screen.getByText(/ny/i);
		screen.getByText(/radera/i);
		screen.getByLabelText(/beskrivning/i);
		screen.getByLabelText(/lagerstatus/i);
		screen.getByLabelText(/pris/i);
		screen.getByLabelText(/produktnamn/i);

	});

	it('should switch the button to "uppdatera", and render "sök på en produkt" input in update mode (switch component clicked once and mode is set to update) ', () => {
		render(
			<QueryClientProvider client={queryClient}>
				<ComponentWrappedInContext />
			</QueryClientProvider>
		);

		const modeSwitch = screen.getByText(/ändra/i);

		const inputField = screen.getByLabelText(/välj produkt/i);
		expect(inputField).toBeDisabled();

		userEvent.click(modeSwitch);
		const updateBtn = screen.getByRole('button', { name: /uppdatera/i });

		expect(updateBtn).toBeInTheDocument();
		expect(inputField).toBeInTheDocument();
		expect(inputField).not.toBeDisabled();
	});

	it('should show informative message if product name input is invalid', () => {
		render(
			<QueryClientProvider client={queryClient}>
				<ComponentWrappedInContext />
			</QueryClientProvider>
		);

		const product_name = screen.getByLabelText(/produktnamn/i);

		userEvent.type(product_name, 'sk');
		expect(screen.getByText(/minst 3 tecken/i)).toBeInTheDocument();
		userEvent.clear(product_name);

		userEvent.type(product_name, 'qwertyuiopasdfghjgerogkeprgokaeprohkaephkoaethijaetöohijaetpoöiklzxcv');
		expect(screen.getByText(/max 50 tecken/i)).toBeInTheDocument();
		userEvent.clear(product_name);
	});

	it('should show informative message if product description input is invalid', () => {
		render(
			<QueryClientProvider client={queryClient}>
				<ComponentWrappedInContext />
			</QueryClientProvider>
		);

		const description = screen.getByLabelText(/beskrivning/i);

		userEvent.type(description, 'sk');
		expect(screen.getByText(/minst 3 tecken/i)).toBeInTheDocument();
	});

	it('should show informative message if product category input is invalid', () => {
		render(
			<QueryClientProvider client={queryClient}>
				<ComponentWrappedInContext />
			</QueryClientProvider>
		);

		const category = screen.getByLabelText(/kategori/i);

		userEvent.type(category, 'sk');
		expect(screen.getByText(/minst 3 tecken/i)).toBeInTheDocument();
	});

	it('should show informative message if product stock value input is invalid', () => {
		render(
			<QueryClientProvider client={queryClient}>
				<ComponentWrappedInContext />
			</QueryClientProvider>
		);

		const stockValue = screen.getByLabelText(/lagerstatus/i);

		userEvent.type(stockValue, '1209');
		expect(screen.getByText(/max antal: 999/i)).toBeInTheDocument();
	});
	it('should show informative message if product price value input is invalid', () => {
		render(
			<QueryClientProvider client={queryClient}>
				<ComponentWrappedInContext />
			</QueryClientProvider>
		);

		const price = screen.getByLabelText(/pris/i);

		userEvent.type(price, '100001');
		expect(screen.getByText(/max pris: 99999/i)).toBeInTheDocument();
	});
	it('should show informative message if product image value input is invalid', () => {
		render(
			<QueryClientProvider client={queryClient}>
				<ComponentWrappedInContext />
			</QueryClientProvider>
		);

		const imgField = screen.getByLabelText(/bild/i);

		userEvent.type(imgField, 'not an url');
		expect(screen.getByText(/fyll i giltig url/i)).toBeInTheDocument();
	});
	it('should not be able to submit if form input is invalid', () => {
		render(
			<QueryClientProvider client={queryClient}>
				<ComponentWrappedInContext />
			</QueryClientProvider>
		);

		const sendUpdateBtn = screen.queryByRole('button', { name: /skapa/i });
		
		expect(sendUpdateBtn).toBeDisabled();
	});
});
