import Logo from './components/Logo';
import LoginPage from './pages/LoginPage';
import { useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './themes/themes';
import { Routes, Route } from 'react-router-dom';
import HeaderInnerContainer from './components/header/HeaderInnerContainer';

import styled from 'styled-components';

import { useNavigate } from 'react-router-dom';

import useAuth from './modules/auth/useAuth';
import MainProductsPage from './pages/MainProductsPage';

function App() {
	const navigate = useNavigate();

	const { pathname } = useLocation();
	const { data: isAuthenticated } = useAuth();

	if (pathname === '/login' && isAuthenticated?.loggedIn) {
		navigate(`/`);
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
						<Route path='/' element={<MainProductsPage />} />
					</Routes>
				</main>

				<footer>
					<small>&copy; Kristofer Padoan 2022</small>
				</footer>

				<div className='bg'></div>
			</AppOuterContainer>
		</ThemeProvider>
	);
}

export default App;

const AppOuterContainer = styled.div`

	width: 100vw;    
	height: 100vh;
`;
