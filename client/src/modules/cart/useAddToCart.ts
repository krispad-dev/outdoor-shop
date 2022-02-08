import { useQueryClient, useMutation } from "react-query";



async function addToCart(id: string | undefined) {
    
    const res = await fetch('api/cart', {
            method: 'POST',
            credentials: 'include',
            mode: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ product_id: id })
    })
    return await res.json()
}

export default function useAddToCart() {

    const queryClient = useQueryClient();

    return useMutation((id: string | undefined ) => addToCart(id), {
        onSuccess: () => queryClient.invalidateQueries(['cart'])
    });
}