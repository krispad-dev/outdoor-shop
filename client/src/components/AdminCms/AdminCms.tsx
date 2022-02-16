import { useContext, useEffect, useState } from 'react';
import { useWindowSize } from '@react-hook/window-size';
import { UiStateContext } from '../../context/UiStateContext';

import {
	createUpdate,
	isValidCategory,
	isValidDescription,
	isValidImageUrl,
	isValidPrice,
	isValidProductName,
	isValidStockValue,
} from '../../helpers/validators';

import useAddProduct, { FormData } from '../../modules/products/useAddProduct';
import useDeleteProduct from '../../modules/products/useDeleteProduct';
import useGetProducts from '../../modules/products/useGetProducts';
import useUpdateProduct from '../../modules/products/useUpdateProduct';
import StyledFormContainer from '../../styled-components/StyledFormContainer';
import Button from '../global/Button';
import BtnSpinner from '../global/loaders/BtnSpinner';
import SearchToUpdate from './SearchToUpdate';
import AdminToggleButton from './ToggleButton';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

export default function AdminCms() {
	const initialState = {
		product_name: '',
		description: '',
		category: '',
		image: '',
		in_stock: 1,
		price: 1,
	};

	const [csmIsLoading, setCmsIsLoading] = useState(false);
	const [formData, setFormData] = useState<FormData>(initialState);

	const [width, height] = useWindowSize();

	const { state, dispatch } = useContext(UiStateContext);
	const { data: products } = useGetProducts();

	const {
		mutate: mutateAdd,
		data: dataAdd,
		isLoading: isLoadingAdd,
		isSuccess: addIsSuccess,
	} = useAddProduct();

	const {
		mutate: mutateUpdate,
		data: dataUpdate,
		isLoading: isLoadingUpdate,
		isSuccess: updateIsSuccess,
	} = useUpdateProduct();

	const {
		mutate: mutateDelete,
		data: dataDelete,
		isLoading: isLoadingDelete,
		isSuccess: deleteIsSuccess,
	} = useDeleteProduct();

	const currentMode = state.adminMode;

	const isError =
		dataDelete?.success === false &&
		dataUpdate?.success === false &&
		dataAdd?.success === false;

	function submitHandler(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();

		if (currentMode === 'new') {
			mutateAdd(formData);
		} else if (currentMode === 'update') {
			mutateUpdate(formData);
		} else if (currentMode === 'delete') {
			mutateDelete(state?.productToUpdate?.product_id);
		}
	}

	const productNameHelperText = isValidProductName(formData?.product_name)
		? isValidProductName(formData?.product_name)
		: ' ';

	const descriptionHelperText = isValidDescription(formData?.description)
		? isValidDescription(formData?.description)
		: ' ';

	const categoryHelperText = isValidCategory(formData?.category)
		? isValidCategory(formData?.category)
		: ' ';

	const stockValueHelperText = isValidStockValue(formData?.in_stock)
		? isValidStockValue(formData?.in_stock ? formData?.in_stock : 0)
		: null;

	const priceHelperText = isValidPrice(formData?.price)
		? isValidPrice(formData?.price ? formData?.price : 0)
		: null;

	const imageHelperText = isValidImageUrl(formData?.image)
		? isValidImageUrl(formData?.image)
		: ' ';

	useEffect(() => {
		if (isLoadingAdd && isLoadingUpdate && isLoadingDelete) {
			setCmsIsLoading(true);
		} else {
			setCmsIsLoading(false);
		}
	}, [isLoadingAdd, isLoadingUpdate, isLoadingDelete]);

	useEffect(() => {
		if (state.productToUpdate) {
			setFormData(state?.productToUpdate);
		}
	}, [state.productToUpdate]);

	useEffect(() => {
		if (currentMode === 'new') {
			setFormData(initialState);
		}
		dispatch({ type: 'SET_PRODUCT_TO_EDIT', payload: null });
	}, [currentMode]);

	useEffect(() => {
		setFormData(initialState);

		if (isSuccess) {
			dispatch({ type: 'SET_ACTIVATE_SNACK', payload: snackText });
		}
	}, [deleteIsSuccess, updateIsSuccess, addIsSuccess]);

	const snackText =
		currentMode === 'new'
			? 'Ny produkt har skapats'
			: currentMode === 'delete'
			? 'Produkt har tagits bort'
			: currentMode === 'update'
			? 'produkt har uppdaterats'
			: '';

	const isSuccess = deleteIsSuccess || updateIsSuccess || addIsSuccess;

	return (
		<StyledFormContainer>
			<InnerContainer>
				<Box
					component='form'
					sx={{
						'& > :not(style)': {
							m: 1,
							width: '25ch',
						},
					}}
					noValidate
					autoComplete='off'
					onSubmit={submitHandler}
				>
					<div>
						<AdminToggleButton />
						<SearchToUpdate
							products={products.data}
							isDisabled={currentMode === 'new'}
						/>

						<TextField
							style={{ width: '100%' }}
							disabled={currentMode === 'delete'}
							value={formData.price}
							size='small'
							autoComplete='true'
							error={isError}
							margin='normal'
							id='price'
							label='Pris'
							InputProps={{
								startAdornment: (
									<InputAdornment position='start'>SEK</InputAdornment>
								),
							}}
							variant='outlined'
							placeholder='Lagerstatus'
							helperText={priceHelperText ? priceHelperText : ' '}
							onChange={e =>
								setFormData({ ...formData, [e.target.id]: e.target.value })
							}
							name='Pris'
							type='number'
						/>

						<TextField
							style={{ width: '100%' }}
							disabled={currentMode === 'delete'}
							value={formData.in_stock}
							size='small'
							autoComplete='true'
							error={isError}
							margin='normal'
							id='in_stock'
							label='Lagerstatus'
							InputProps={{
								startAdornment: (
									<InputAdornment position='start'>Antal</InputAdornment>
								),
							}}
							variant='outlined'
							placeholder='Lagerstatus'
							helperText={stockValueHelperText ? stockValueHelperText : ' '}
							onChange={e =>
								setFormData({ ...formData, [e.target.id]: e.target.value })
							}
							name='Lagerstatus'
							type='number'
						/>

						<Button
							spinner={<BtnSpinner />}
							text={
								currentMode === 'new'
									? 'skapa'
									: currentMode === 'update'
									? 'uppdatera'
									: currentMode === 'delete'
									? 'radera'
									: deleteIsSuccess || updateIsSuccess || addIsSuccess
									? 'lyckades'
									: ''
							}
							isDisabled={
								currentMode !== 'delete' && !createUpdate.isValidSync(formData)
							}
							isLoading={isLoadingAdd || isLoadingUpdate || isLoadingDelete}
						/>
					</div>

					<div>
						<TextField
							style={{ width: '100%' }}
							disabled={currentMode === 'delete'}
							value={formData.image}
							size='small'
							autoComplete='true'
							error={isError}
							margin='normal'
							id='image'
							label='Bild'
							variant='outlined'
							placeholder='Bild'
							helperText={imageHelperText}
							onChange={e =>
								setFormData({ ...formData, [e.target.id]: e.target.value })
							}
							name='Bild'
							type='text'
						/>

						<TextField
							style={{ width: '100%' }}
							disabled={currentMode === 'delete'}
							value={formData.product_name}
							size='small'
							autoComplete='true'
							error={isError}
							margin='normal'
							id='product_name'
							label='Produktnamn'
							variant='outlined'
							placeholder='Produktnamn'
							helperText={productNameHelperText}
							onChange={e =>
								setFormData({ ...formData, [e.target.id]: e.target.value })
							}
							name='product name'
							type={'text'}
						/>
						<TextField
							style={{ width: '100%' }}
							disabled={currentMode === 'delete'}
							value={formData.description}
							size='small'
							autoComplete='true'
							error={isError}
							margin='normal'
							id='description'
							label='Beskrivning'
							variant='outlined'
							placeholder='Beskrivning'
							helperText={descriptionHelperText}
							onChange={e =>
								setFormData({ ...formData, [e.target.id]: e.target.value })
							}
							name='Beskrivning'
							type={'text'}
						/>
						<TextField
							style={{ width: '100%' }}
							disabled={currentMode === 'delete'}
							value={formData.category}
							size='small'
							autoComplete='true'
							error={isError}
							margin='normal'
							id='category'
							label='Kategori'
							variant='outlined'
							placeholder='Kategori'
							helperText={categoryHelperText}
							onChange={e =>
								setFormData({ ...formData, [e.target.id]: e.target.value })
							}
							name='Kategori'
							type={'text'}
						/>
					</div>
				</Box>
			</InnerContainer>
		</StyledFormContainer>
	);
}

const InnerContainer = styled.div`
	form {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		width: auto;
		flex-wrap: wrap;
		height: 23rem;
	}
`;
