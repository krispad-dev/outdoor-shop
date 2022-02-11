import styled from 'styled-components';
import Logo from './Logo';
import MenuHeader from './MenuHeader';
import Search from '../search/Search';

export default function HeaderInnerContainer() {
	return (
		<InnerHeaderContainer>
			<Logo />
			<div className='menu-search-wrapper'>
				<Search />
				<MenuHeader />
			</div>
		</InnerHeaderContainer>
	);
}

const InnerHeaderContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
	width: 95%;
	height: 100%;

	@media(max-width: 500px) {
		justify-content: center;
		margin-top: 1rem;
	}

	div.menu-search-wrapper {
		display: flex;
	} 
`;
