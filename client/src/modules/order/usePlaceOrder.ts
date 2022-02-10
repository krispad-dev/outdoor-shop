import { useQueryClient, useMutation } from "react-query";

async function orderProducts() {
    
    const res = await fetch('api/order', {
            method: 'POST',
            credentials: 'include',
            mode: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
    })
    return await res.json()
}

export default function usePlaceOrder() {

    const queryClient = useQueryClient();

    return useMutation(() => orderProducts(), {
        onSettled: () => {
            queryClient.invalidateQueries(['cart'])
        } 
    });
}