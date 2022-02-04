import React from 'react';
import styled from 'styled-components';
import { Product } from '../models/Item';

export default function ProductListItem({ description, product_name, is_purchased, id }: Product) {
	return (
		<ListItem>
			<div className='inner-container'>
				<h3>{product_name}</h3>
				<p>{description}</p>
			</div>
		</ListItem>
	);
}

const ListItem = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 2rem 0rem;

	box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
	border-radius: 5px;
	height: auto;
	width: 70vw;

	div.inner-container {
		width: 90%;
	}

	p {
		color: #000;
		opacity: 87%;
	}
	h3 {
		color: #000;
		opacity: 60%;
	}
`;
