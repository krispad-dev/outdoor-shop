import React from 'react';
import styled from 'styled-components';
import { Cart } from '../../models/Cart';
import { formatSek } from '../../helpers/formatSek';

export default function CartListItem({ image, product_name, description, in_stock, price }: Cart) {
	return (
		<ListItemContainer>
			<div className='left-container'>
				<div className='cart-inner-container'>
					<img src={image} alt='' />
				</div>
				<div className='info-container'>
					<h4>{product_name}</h4>
					<p>{description}</p>
					<p>{formatSek(price)}</p>
					<p>Kvar i webblager: {in_stock}</p>
				</div>
			</div>

		<div className="rightContainer">

			
		</div>

		</ListItemContainer>
	);
}

const ListItemContainer = styled.li`
	display: flex;


	div.left-container {
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
	}


	div.cart-inner-container {
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		object-fit: cover;
		img {
			height: 100px;
		}
	}

	div.info-container {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		margin: 1rem;
	}
	background-color: ${props => props.theme.cardColor};
	height: 9rem;
`;
