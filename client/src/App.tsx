import Logo from './components/Logo';
import LoginPage from './pages/LoginPage';
import { useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './themes/themes';
import { Routes, Route } from 'react-router-dom';
import Tools from './components/Tools';

import { useNavigate } from 'react-router-dom';

import useAuth from './modules/auth/useAuth'
import MainProductsPage from './pages/MainProductsPage';

function App() {


	const navigate = useNavigate()

	const { pathname } = useLocation()
	const { data: isAuthenticated } = useAuth()

	if(pathname === '/login' && isAuthenticated?.loggedIn) {
		navigate(`/`);
	}

	
	return (
		<ThemeProvider theme={lightTheme}>
		<div className='App'>

 			{pathname !== '/login' && <header>
				<Logo />
			</header>}


			<main> 		
				<Routes>

					<Route path='/login' element={<LoginPage />} />
					<Route path='/' element={<MainProductsPage />} />

				</Routes>
			</main> 
		</div>
		</ThemeProvider>
	);
}

export default App;
