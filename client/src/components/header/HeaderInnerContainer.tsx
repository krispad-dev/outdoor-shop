import styled from 'styled-components';
import Logo from './Logo';
import MenuHeader from './MenuHeader';
import Search from '../search/Search';

export default function HeaderInnerContainer() {
	return (
		<InnerHeaderContainer>
			<div className='logo-menu-wrapper'>
				<Logo />
				<MenuHeader />
			</div>
			<Search />
		</InnerHeaderContainer>
	);
}

const InnerHeaderContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	flex-direction: column;
	width: 95%;

	div.logo-menu-wrapper {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
`;
