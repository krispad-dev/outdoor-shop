import React from 'react';
import styled from 'styled-components';

export default function Search() {
	return (
		<OuterContainer>
			<input type='text' />
		</OuterContainer>
	);
}

const OuterContainer = styled.div`
	width: 100%;

	input {
		height: 3.5rem;
		border-radius: 5px;
		width: 100%;
	}
`;
