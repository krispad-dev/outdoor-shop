import React from 'react';
import ShoppingListItem from './ProductListItem';
import { Product } from '../models/Item';

import useGetShoppingList from '../hooks/useGetShoppingList';

export default function ProductList() {

	const { data } = useGetShoppingList()

	return (
		<ul>
			{data?.data?.map((product: Product ) => <ShoppingListItem key={product.id} { ...product } /> )}
		</ul>
	);
}
