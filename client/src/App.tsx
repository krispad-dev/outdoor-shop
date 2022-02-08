import Logo from './components/header/Logo';
import { useEffect, useContext } from 'react';
import { UiStateContext } from './context/UiStateContext';
import LoginPage from './pages/LoginPage';
import { useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './themes/themes';
import { Routes, Route } from 'react-router-dom';
import HeaderInnerContainer from './components/header/HeaderInnerContainer';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import styled from 'styled-components';

import { useNavigate } from 'react-router-dom';

import useAuth from './modules/auth/useAuth';
import MainProductsPage from './pages/MainProductsPage';

function App() {
	const navigate = useNavigate();
	const { state: uiState, dispatch } = useContext(UiStateContext);
	const { pathname } = useLocation();
	const { data: isAuthenticated } = useAuth();

	if (pathname === '/login' && isAuthenticated?.loggedIn) {
		setTimeout(() => {
			navigate(`/`);
		}, 500);
	}

	return (
		<ThemeProvider theme={lightTheme}>
			<AppOuterContainer className='App'>
				<header>
					<HeaderInnerContainer />
				</header>

				<main>
					<Routes>
						<Route path='/login' element={<LoginPage />} />
						<Route path='/cart' element={<CartPage />} />
						<Route
							path='/:id'
							element={<ProductPage isLoggedIn={isAuthenticated?.loggedIn} />}
						/>
						<Route path='/' element={<MainProductsPage />} />
					</Routes>
				</main>

				<div className='bg'></div>
			</AppOuterContainer>
		</ThemeProvider>
	);
}

export default App;

const AppOuterContainer = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;
