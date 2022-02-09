import { useQueryClient, useMutation } from "react-query";

interface UpdateCart {
    id: string
}

async function deleteCartItem({ id }: UpdateCart) {
    
    
    const res = await fetch('api/cart', {
            method: 'DELETE',
            credentials: 'include',
            mode: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ cart_item_id: id})
    })
    return await res.json()
}

export default function useDeleteCart() {

    const queryClient = useQueryClient();

    return useMutation(({ id }: UpdateCart) => deleteCartItem({ id }), {
        onSuccess: () => queryClient.invalidateQueries(['cart'])
    });
}