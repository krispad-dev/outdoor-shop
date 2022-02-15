import { useQueryClient, useMutation } from "react-query";

export interface UpdateProduct {

	product_name: string;
	description: string;
	category: string;
	in_stock: number | null;
	price: number | null;
	image: string;

}


async function updateProduct(product: UpdateProduct ) {
    
    const res = await fetch('api/products', {
            method: 'PUT',
            credentials: 'include',
            mode: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
    })
    return await res.json()
}

export default function useUpdateProduct() {

    const queryClient = useQueryClient();

    return useMutation((product: UpdateProduct) => updateProduct(product), {
        onSuccess: () => queryClient.invalidateQueries(['products'])
    });
}