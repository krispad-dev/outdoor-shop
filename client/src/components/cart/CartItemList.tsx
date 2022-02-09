import React from 'react';
import CartListItem from './CartListItem';
import styled from 'styled-components';
import { Cart } from '../../models/Cart';

export default function CartItemList({ cartItems }: { cartItems: Cart[] }) {

 	const sortedCartItems = [...cartItems].sort((a: Cart, b: Cart) => a.cart_item_id - b.cart_item_id)

	return (
		<CartItemListContainer>
			{sortedCartItems.map((cartItem: Cart) => (
					<CartListItem key={cartItem.cart_item_id} {...cartItem} />
				))}
		</CartItemListContainer>
	);
}

const CartItemListContainer = styled.ul`
	display: flex;
	flex-direction: column;

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
`;
