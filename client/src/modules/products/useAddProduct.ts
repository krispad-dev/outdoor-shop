import { useQueryClient, useMutation } from "react-query";
import { Product } from '../../models/Product'


export interface FormData {
	product_name: string;
	description: string;
	category: string;
	in_stock: number | null;
	price: number | null;
	image: string;
}


async function addProduct(product: FormData ) {
    
    const res = await fetch('api/products', {
            method: 'POST',
            credentials: 'include',
            mode: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
    })
    return await res.json()
}

export default function useAddProduct() {

    const queryClient = useQueryClient();

    return useMutation((product: FormData) => addProduct(product), {
        onSuccess: () => queryClient.invalidateQueries(['products'])
    });
}