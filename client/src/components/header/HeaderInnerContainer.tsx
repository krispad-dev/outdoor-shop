import React from 'react';
import styled from 'styled-components';
import Logo from '../Logo';

export default function HeaderInnerContainer() {
	return (
		<InnerHeaderContainer>
			<Logo />
		</InnerHeaderContainer>
	);
}

const InnerHeaderContainer = styled.div`
	width: 100%;
	height: 100%;
`;
