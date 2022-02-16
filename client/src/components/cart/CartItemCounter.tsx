
import styled from 'styled-components';
import useSetCartItemAmount from '../../modules/cart/useSetCartItemCount';
import useDeleteCart from '../../modules/cart/useDeleteCart';

import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

export default function CartItemCounter({
	cart_item_id,
	item_count,
	disabled
}: {
	cart_item_id: number;
	item_count: number;
	disabled: boolean
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
			<button disabled={disabled} onClick={handleIncrease}>
				<MdKeyboardArrowUp />
			</button>
		</CartItemCounterWrapper>
	);
}

const CartItemCounterWrapper = styled.div`

	background-color: ${props => props.theme.btnColor};

	color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 3px;
	animation: grow 0.2s ease-in-out forwards;
	@keyframes grow {
		from {
			height: 0rem;
		}
		to {
			height: 3rem;
		}
	}

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
		font-size: 1.5rem;
		font-family: monospace;
		top: 6px;
		z-index: 999;
		color: #fff;
	}
	svg {
		font-size: 1.8rem;
	}
`;
