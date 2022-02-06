import Logo from './components/Logo';
import ProductList from './components/ProductList';
import Tools from './components/Tools';
import Login from './components/login/LoginForm';
import LoginPage from './pages/LoginPage';
import { useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './themes/themes';
import { Routes, Route, Navigate } from 'react-router-dom';


function App() {

	const { pathname } = useLocation()


	


	return (
		<ThemeProvider theme={lightTheme}>
		<div className='App'>
 			{pathname !== '/login' && <header>
				<Logo />
			</header>}


			<main>
{/* 			<Tools />  */}
				<Routes>
					<Route path='/login' element={<LoginPage />} />
				</Routes>
			</main>
		</div>
		</ThemeProvider>
	);
}

export default App;
