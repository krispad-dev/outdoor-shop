
import { useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './themes/themes';
import { Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom'

import HeaderInnerContainer from './components/header/HeaderInnerContainer';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import styled from 'styled-components';
import LoginPage from './pages/LoginPage';
import useAuth from './modules/auth/useAuth';
import MainProductsPage from './pages/MainProductsPage';

function App() {

	const { pathname } = useLocation();
	const { data: isAuthenticated } = useAuth();
	

	return (
		<ThemeProvider theme={lightTheme}>
			<AppOuterContainer className='App'>
				
				{ pathname !== '/login' &&
					<header>
						<HeaderInnerContainer />
					</header>
				}

				<main>
					<Routes>

						<Route 
							path='/login' 
							element={!isAuthenticated?.loggedIn 
							? <LoginPage /> 
							: <Navigate to={'/'} /> } 
						/>

						<Route 
							path='/cart'
							element={isAuthenticated?.loggedIn 
							? <CartPage isLoggedIn={isAuthenticated?.loggedIn}/> 
							: <Navigate to={'/'} />} 
						/>

						<Route 
							path='/:id' 
							element={<ProductPage 
							isLoggedIn={isAuthenticated?.loggedIn} />}
						/>

						<Route 
							path='/' 
							element={<MainProductsPage />} 
						/>

					</Routes>
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
