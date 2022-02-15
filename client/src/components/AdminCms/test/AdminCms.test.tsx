import { render, screen } from '@testing-library/react';
import { mockData } from './MockData';
import { QueryClient, QueryClientProvider } from 'react-query';

import useGetProducts from '../../../modules/products/useGetProducts';
import AdminCms from '../AdminCms';
import userEvent from '@testing-library/user-event';
import { UiStateContext } from '../../../context/UiStateContext';

import { useReducer } from 'react';
import { UiReducer } from '../../../context/UiReducer';

jest.mock('../../../modules/products/useGetProducts');
const useGetProductsMock = useGetProducts as jest.Mock<any>;
const queryClient = new QueryClient();

describe('AdminCms Component', () => {
	function ComponentWrappedInContext() {
		const initialState = {
			headerMenuIsOpen: false,
			userAuthState: { success: false, data: {} },
			searchString: '',
			isAdminAddProduct: true,
			productToUpdate: {},
		};

		const [state, dispatch] = useReducer(UiReducer, initialState);

		return (
			<UiStateContext.Provider value={{ state, dispatch }}>
				<AdminCms />
			</UiStateContext.Provider>
		);
	}

	useGetProductsMock.mockImplementation(() => ({
		data: { data: mockData },
		success: false,
	}));

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

		const header = screen.getByRole('heading', { name: /admin/i });

		const skapaBtn = screen.getByRole('button', { name: /skapa/i });

		const upDateProduct = screen.getByText(/ändra produkt/i);
		const addProduct = screen.getByText(/ny produkt/i);

		const description = screen.getByLabelText(/beskrivning/i);
		const in_stock = screen.getByLabelText(/lagerstatus/i);
		const price = screen.getByLabelText(/pris/i);
		const product_name = screen.getByLabelText(/produktnamn/i);
		const category = screen.getByLabelText(/kategori/i);

		expect(skapaBtn).toBeInTheDocument();
		expect(header).toBeInTheDocument();
		expect(description).toBeInTheDocument();
		expect(in_stock).toBeInTheDocument();
		expect(price).toBeInTheDocument();
		expect(product_name).toBeInTheDocument();
		expect(category).toBeInTheDocument();
		expect(upDateProduct).toBeInTheDocument();
		expect(addProduct).toBeInTheDocument();

		const adminLogo = screen.getByText(/admin/i);
		expect(adminLogo).toBeInTheDocument();
	});

	it('should switch the button to "uppdatera", and render "sök på en produkt" input in update mode (switch component clicked once and mode is set to update) ', () => {
		render(
			<QueryClientProvider client={queryClient}>
				<ComponentWrappedInContext />
			</QueryClientProvider>
		);

		const modeSwitch = screen.getByText(/ändra produkt/i);

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

		userEvent.type(product_name, 'sko');
		expect(screen.getByText(/minst 4 tecken/i)).toBeInTheDocument();
		userEvent.clear(product_name);

		userEvent.type(product_name, 'qwertyuiopasdfghjklzxcv');
		expect(screen.getByText(/max 20 tecken/i)).toBeInTheDocument();
		userEvent.clear(product_name);
	});

	it('should show informative message if product description input is invalid', () => {
		render(
			<QueryClientProvider client={queryClient}>
				<ComponentWrappedInContext />
			</QueryClientProvider>
		);

		const description = screen.getByLabelText(/beskrivning/i);

		userEvent.type(description, 'sko');
		expect(screen.getByText(/minst 4 tecken/i)).toBeInTheDocument();
	});

	it('should show informative message if product category input is invalid', () => {
		render(
			<QueryClientProvider client={queryClient}>
				<ComponentWrappedInContext />
			</QueryClientProvider>
		);

		const category = screen.getByLabelText(/kategori/i);

		userEvent.type(category, 'sko');
		expect(screen.getByText(/minst 4 tecken/i)).toBeInTheDocument();
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

		const sendUpdateBtn = screen.getByRole('button', { name: /skapa/i });

		userEvent.click(sendUpdateBtn);
		expect(sendUpdateBtn).toBeDisabled();
	});
});
