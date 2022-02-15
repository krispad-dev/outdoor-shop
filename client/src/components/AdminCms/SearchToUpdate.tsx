import { useContext, useState } from 'react';
import { UiStateContext } from '../../context/UiStateContext';
import { Product } from '../../models/Product';


import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

export default function SearchToUpdate({
	products,
	isDisabled,
}: {
	products: Product[];
	isDisabled: boolean | undefined;
}) {
	const { dispatch } = useContext(UiStateContext);

	function changeHandler(valueToSet: string) {
		const filteredProductToSet = products.filter(
			product => product.product_name === valueToSet
		)[0];

		dispatch({ type: 'SET_PRODUCT_TO_EDIT', payload: filteredProductToSet });
	}

	return (
		<Stack spacing={2} sx={{ width: 300 }}>
			<Autocomplete
				disabled={isDisabled}
				id='free-solo-demo'
				freeSolo
				onChange={(event, newValue) => {
					if (typeof newValue === 'string') {
						changeHandler(newValue);
					}
				}}
				options={products.map(product => product.product_name)}
				renderInput={params => <TextField {...params} label='välj produkt' />}
			/>
		</Stack>
	);
}
