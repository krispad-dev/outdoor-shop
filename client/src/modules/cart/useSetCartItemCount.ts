import { useQueryClient, useMutation } from "react-query";

interface UpdateCart {
    id: string
    increment: boolean
}

async function updateCart({id, increment}: UpdateCart) {
    
    
    const res = await fetch('api/cart', {
            method: 'PUT',
            credentials: 'include',
            mode: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ cart_item_id: id, increment: increment})
    })
    return await res.json()
}

export default function useSetCartItemAmount() {

    const queryClient = useQueryClient();

    return useMutation(({ id, increment }: UpdateCart) => updateCart({ id, increment }), {
        onSuccess: () => queryClient.invalidateQueries(['cart'])
    });
}