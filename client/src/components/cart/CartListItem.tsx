import React from 'react';
import styled from 'styled-components';
import { Cart } from '../../models/Cart';
import { formatSek } from '../../helpers/formatSek';
import CartItemCounter from './CartItemCounter';

export default function CartListItem({ image, product_name, in_stock, price, cart_item_id, item_count }: Cart) {
	
	const btnIsDisabled = item_count >= in_stock;

	return (
		<ListItemContainer>
			<div className='left-container'>
				<img src={image} alt='image of product' />
			</div>

			<div className='middle-container'>
				<h4>{product_name}</h4>
				<p> <strong>{formatSek(price)}</strong> </p>
				<p id='kvar-i-webblager'>Kvar&nbsp;i&nbsp;webblager:&nbsp;<strong>{in_stock}</strong> </p>
			</div>

			<div className='right-container'>
				<CartItemCounter disabled={btnIsDisabled} cart_item_id={cart_item_id} item_count={item_count} />
			</div>
		</ListItemContainer>
	);
}

const ListItemContainer = styled.li`
	h3, h2, h4 {
		font-weight: 500;
		opacity: ${props => props.theme.textHighEmph};
	}
	h4 {
		text-transform: uppercase;
	}

	height: auto;
	min-height: 5rem;
	
	display: grid;
	padding: 1rem;
	grid-template-columns: 25% 25% 50%;
	grid-template-rows: 1fr;
	margin-bottom: 0.5rem;

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
		p#kvar-i-webblager {
			margin-top: 1rem;
		}

	}

	div.right-container {
		grid-area: right;
		display: flex;
		justify-content: flex-end;
		align-items: flex-start;
	}
`;
