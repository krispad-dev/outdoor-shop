import SearchListCard from './SearchListCard';
import styled from 'styled-components';
import { Product } from '../../models/Product';

export default function SearchList({ products }: { products: Product[] }) {
	return (
		<ListContainer>
			{products && products?.map((product: Product) => {
				return <SearchListCard key={product.product_id} {...product} />;
			})}
		</ListContainer>
	);
}

const ListContainer = styled.ul`
	background-color: #fff;
	position: absolute;

	width: 100%;
	height: auto;
	margin-top: 0.5rem;
	z-index: 900;
`;
