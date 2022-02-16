import { screen, render, getByText } from '@testing-library/react';
import App from './App';

import { UiStateContext } from './context/UiStateContext';
import { useReducer } from 'react';
import { UiReducer } from './context/UiReducer';

import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

const queryClient = new QueryClient();

describe('App component', () => {
	function AppComponentTestWrapper() {
		const initialState = {
			headerMenuIsOpen: false,
			userAuthState: { success: false, data: {} },
			searchString: '',
		};

		const [state, dispatch] = useReducer(UiReducer, initialState);

		return (
			<UiStateContext.Provider value={{ state, dispatch }}>
				<BrowserRouter>
					<QueryClientProvider client={queryClient}>
						<App />
					</QueryClientProvider>
				</BrowserRouter>
			</UiStateContext.Provider>
		);
	}

	it('should render', () => {
		render(<AppComponentTestWrapper />);
	});
});
