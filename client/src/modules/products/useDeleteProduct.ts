import { useQueryClient, useMutation } from "react-query";

async function deleteProduct(product_id: number ) {

    const res = await fetch('api/products', {
            method: 'DELETE',
            credentials: 'include',
            mode: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ product_id: product_id })
    })
    return await res.json()
}

export default function useDeleteProduct() {

    const queryClient = useQueryClient();

    return useMutation((product_id: any) => deleteProduct(product_id), {
        onSuccess: () => queryClient.invalidateQueries(['products'])
    });
}