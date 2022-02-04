import Logo from './components/Logo';
import ProductList from './components/ProductList';
import Tools from './components/Tools';

function App() {
	return (
		<div className='App'>
			<header>
				<Logo />
			</header>

			<main>
				<Tools />
				<ProductList />
			</main>
		</div>
	);
}

export default App;
