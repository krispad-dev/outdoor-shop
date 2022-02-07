import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import UiStateProvider from './context/UiStateContext';

import { QueryClient, QueryClientProvider } from 'react-query';

import { BrowserRouter } from 'react-router-dom';

const queryClient = new QueryClient();

ReactDOM.render(
	<React.StrictMode>
		<UiStateProvider>
			<BrowserRouter>
				<QueryClientProvider client={queryClient}>
					<App />
				</QueryClientProvider>
			</BrowserRouter>
		</UiStateProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
