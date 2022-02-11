import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function SearchCard({
	product_name,
	product_id,
}: {
	product_name: string;
	product_id: number;
}) {
	return (
		<ListItemContainer role={'button'}>
			<Link to={`/${product_id}`}></Link>
			<div className='inner-container'>
				<p>{product_name}</p>
			</div>
		</ListItemContainer>
	);
}

const ListItemContainer = styled.li`
position: relative;
	p {
		font-weight: 600;
	}

	margin-top: 0.2rem;
	:hover {
		background-color: ${props => props.theme.accentColor};
		transition: 0.2s ease-in-out;
		cursor: pointer;
		color: #fff;
	}
	display: flex;
	justify-content: flex-start;
	align-items: center;
	background-color: ${props => props.theme.cardColorDark};
	border-radius: 3px;
	width: 95%;
	height: 2rem;
	padding: 0.5rem;
	div.inner-container {
		p {
		}
	}
`;
