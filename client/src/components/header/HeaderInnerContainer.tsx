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
	width: 100%;
	height: 100%;
`;
