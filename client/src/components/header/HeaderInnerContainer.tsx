import React from 'react';
import styled from 'styled-components';
import Logo from '../Logo';
import MenuHeader from './MenuHeader';

export default function HeaderInnerContainer() {
	return (
		<InnerHeaderContainer>
			<Logo />
			<MenuHeader />
		</InnerHeaderContainer>
	);
}

const InnerHeaderContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 95%;
	height: 100%;
`;
