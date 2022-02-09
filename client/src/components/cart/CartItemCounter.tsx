import React from 'react';
import Button from '../global/Button';
import styled from 'styled-components';

import useSetCartItemAmount from '../../modules/cart/useSetCartItemCount';
import useDeleteCart from '../../modules/cart/useDeleteCart';

import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

export default function CartItemCounter({
	cart_item_id,
	item_count,
}: {
	cart_item_id: number;
	item_count: number;
}) {
	const { mutate: setCartItemAmount } = useSetCartItemAmount();
	const { mutate: deleteCartItem } = useDeleteCart();

	const handleDecreaseDeleteItem =
		item_count <= 1
			? () => deleteCartItem({ id: cart_item_id.toString() })
			: () => setCartItemAmount({ id: cart_item_id.toString(), increment: false });

	const handleIncrease = () =>
		setCartItemAmount({ id: cart_item_id.toString(), increment: true });

	return (
		<CartItemCounterWrapper>
			<button onClick={handleDecreaseDeleteItem}>
				<MdKeyboardArrowDown />
			</button>

			<h3> {item_count} </h3>
			<button onClick={handleIncrease}>
				<MdKeyboardArrowUp />
			</button>
		</CartItemCounterWrapper>
	);
}

const CartItemCounterWrapper = styled.div`
	position: relative;
	background-color: ${props => props.theme.btnColor};
	z-index: 0;
	color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 3px;

	button {
		border-radius: 3px;
		z-index: 2;
		height: 100%;
		width: 100%;
		background-color: ${props => props.theme.btnColor};
		:hover {
			opacity: 60%;
		}
	}

	h3 {
		font-size: 1rem;
		position: absolute;
		top: 6px;
		z-index: 10;
	}
	svg {
		font-size: 1.8rem;
	}
`;
