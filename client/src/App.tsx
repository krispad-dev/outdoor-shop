
import { useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './themes/themes';
import { Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom'
import { useContext } from 'react';
import { UiStateContext } from './context/UiStateContext';

import HeaderInnerContainer from './components/header/HeaderInnerContainer';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import styled from 'styled-components';
import LoginPage from './pages/LoginPage';
import useAuth from './modules/auth/useAuth';
import MainProductsPage from './pages/MainProductsPage';
import AdminPage from './pages/AdminPage';
import Snack from './components/global/Snack';

function App() {

	const { pathname } = useLocation();
	const { data: authState } = useAuth();
	const { state, dispatch } = useContext(UiStateContext)

	const isAuthenticatedAdmin = authState?.loggedIn 
	&& authState?.user?.role
	 === 'admin'

	const isAuthenticated = authState?.loggedIn

	
	return (
		<ThemeProvider theme={lightTheme}>
			<AppOuterContainer className='App'>
				
				{ pathname !== '/login' && pathname !== '/admin' &&
					<header>
						<HeaderInnerContainer />
					</header>
				}

				<main>
					<Routes>

						<Route 
							path='/login' 
							element={!isAuthenticated
							? <LoginPage /> 
							: <Navigate to={'/'} /> } 
						/>

						<Route 
							path='/cart'
							element={isAuthenticated 
							? <CartPage isLoggedIn={isAuthenticated}/> 
							: <Navigate to={'/'} />} 
						/>

						<Route 
							path='/admin'
							element={isAuthenticatedAdmin
							? <AdminPage /> 
							: <Navigate to={'/'} />} 
						/>

						<Route 
							path='/:id' 
							element={<ProductPage 
							isLoggedIn={isAuthenticated} />}
						/>

						<Route 
							path='/' 
							element={<MainProductsPage />} 
						/>

					</Routes>
					{state.snackIsActive && <Snack text={state?.snackMessage} />}
				</main>
			</AppOuterContainer>
		</ThemeProvider>
	);
}

export default App;

const AppOuterContainer = styled.div`
	width: 100vw;
	height: 100%;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-direction: column;

`;
