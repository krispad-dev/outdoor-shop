import React from 'react';
import styled from 'styled-components';

export default function Logo() {
	return (
		<StyledLogoContainer>
			<h1>.outdoor</h1>
		</StyledLogoContainer>
	);
}

const StyledLogoContainer = styled.div`
	font-size: 5rem;
	position: absolute;
	z-index: -1;
	top: -5;
	left: 0;
	opacity: 50%;
	margin-left: 3rem;
	@media(max-width: 700px) {
		font-size: 2rem;
	}
`;
