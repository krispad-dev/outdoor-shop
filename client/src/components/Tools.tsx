import React from 'react';
import Search from './Search';
import styled from 'styled-components';

export default function Tools() {
	return (
		<OuterContainer>
			<button>ADD</button>
			<button>CLEAR</button>
			<Search />
		</OuterContainer>
	);
}

const OuterContainer = styled.div`
    width: 100%;
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;
