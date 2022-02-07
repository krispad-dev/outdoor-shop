import { Tag } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';

export default function TagChip({ tag }: { tag: string }) {
	return (
		<StyledTagChip>
			<h5 className='tag-chip'>{tag}</h5>
		</StyledTagChip>
	);
}

const StyledTagChip = styled.div`
	width: auto;

	display: flex;
	color: #000;

	h5.tag-chip {
		background-color: #fff;
		padding: 0.5rem 1rem;
		font-size: 1.2rem;
	}
`;
