import React from 'react';
import styled from 'styled-components';
import { Product } from '../../models/Product';
import TagChip from '../global/TagChip';
import { formatSek } from '../../helpers/formatSek';
import { shortenLongStrings } from '../../helpers/shortenLogString';

import { Link } from 'react-router-dom';

export default function ProductListItem({
	image,
	product_name,
	description,
	price,
	category,
	product_id,
}: Product) {
	return (
		<OuterCardContainer image={image}>
			<Link to={`/${product_id}`}></Link>
			<div role={'image'} className='top-container'>
				<TagChip tag={category} />
			</div>

			<div className='bottom-container'>
				<article className='info-article'>
					<h3 className='product-name'>{product_name}</h3>
					<p className='product-description'>{shortenLongStrings(description, 200)}</p>
					<p className='product-price'><em>{formatSek(price)}</em></p>

				</article>
			</div>
		</OuterCardContainer>
	);
}

const OuterCardContainer = styled.li<{ image: string }>`
	position: relative;
	display: grid;
	cursor: pointer;
	:hover {
		opacity: 80%;
		transition: 0.2s;
	}
	grid-template-rows: repeat(2, 1fr);
	grid-template-columns: 1fr;
	grid-template-areas:
		'top'
		'bottom';

	background-color: ${props => props.theme.cardColor};

	div.top-container {
		grid-area: top;
		background-image: url(${props => props.image});
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		display: flex;
		justify-content: center;
		flex-direction: column;
	}

	div.bottom-container {
		grid-area: bottom;
		padding: 1rem;

		article.info-article {
			h3 {
				font-size: 1.5rem;
				opacity: ${props => props.theme.textMediumEmph};
				text-transform: uppercase;
				font-weight: 300;
			}
			p.product-description {
				font-size: 0.8rem;
				opacity: ${props => props.theme.black};
				font-weight: 400;
				margin-top: 1rem;
			}
			p.product-price {
				font-size: 1rem;
				opacity: ${props => props.theme.textHighEmph};
				font-weight: 300;
				margin-top: 2rem;
				font-weight: 500;
			}
		}
	}
`;
