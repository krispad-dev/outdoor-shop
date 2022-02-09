import React from 'react';
import styled from 'styled-components';
import { Cart } from '../../models/Cart';
import { formatSek } from '../../helpers/formatSek';
import CartItemCounter from './CartItemCounter';

export default function CartListItem({ image, product_name, description, in_stock, price, cart_item_id, item_count }: Cart) {
	

	return (
		<ListItemContainer>
			<div className='left-container'>
				<img src={image} alt='image of product' />
			</div>

			<div className='middle-container'>
				<h4>{product_name}</h4>
				<p>{description}</p>
				<p> <strong>{formatSek(price)}</strong> </p>
				<p>Kvar i webblager: {in_stock}</p>
			</div>

			<div className='right-container'>
				<CartItemCounter cart_item_id={cart_item_id} item_count={item_count} />
			</div>
		</ListItemContainer>
	);
}

const ListItemContainer = styled.li`
	height: auto;
	min-height: 5rem;
	
	display: grid;
	padding: 1rem;
	grid-template-columns: 25% 25% 50%;
	grid-template-rows: 1fr;
	margin-top: 0.5rem;

	background-color: ${props => props.theme.cardColor};

	grid-template-areas: 'left middle right';

	div.left-container {
		grid-area: left;
		height: 100%;
		img {
			width: 50%;
			object-fit: cover;
			max-height: 8rem;
		}
	}

	div.middle-container {
		grid-area: middle;
		h4{
			font-size: 1.2rem;
			text-transform: uppercase;
		}
	}

	div.right-container {
		grid-area: right;
		display: flex;
		justify-content: flex-end;
		align-items: flex-start;
	}
`;
