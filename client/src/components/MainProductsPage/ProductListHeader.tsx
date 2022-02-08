import React from 'react';
import styled from 'styled-components';
import TextBtn from './TextBtn';

export default function ProductListHeader({ buttons }: { buttons: string[] }) {
	return (
		<StyledContainer>
			{buttons.map(text => (
				<TextBtn key={text} text={text} />
			))}
		</StyledContainer>
	);
}

const StyledContainer = styled.div`
	
	display: flex;
	flex-wrap: wrap;

`;
