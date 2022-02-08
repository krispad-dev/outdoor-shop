import React from 'react';
import CartListItem from './CartListItem';
import styled from 'styled-components';
import { Cart } from '../../models/Cart';

export default function CartItemList({ cartItems }: { cartItems: Cart[] }) {
	return (
		<CartItemListContainer>
			{cartItems &&
				cartItems.map((cartItem: Cart) => (
					<CartListItem key={cartItem.cart_item_id} {...cartItem} />
				))}
		</CartItemListContainer>
	);
}

const CartItemListContainer = styled.ul`
	div.title-container {
		height: 4rem;
		background-color: ${props => props.theme.cardColor};
	}

	overflow-y: scroll;
	height: 80vh;
	-ms-overflow-style: none; 
	scrollbar-width: none;
	::-webkit-scrollbar {
		display: none;
	}

	display: grid;
	gap: 0.5rem;
`;
