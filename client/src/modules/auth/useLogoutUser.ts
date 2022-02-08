import { useQueryClient, useMutation } from "react-query";


async function logoutUser() {

    const res = await fetch('api/auth/logout', {
        method: 'POST',
        credentials: 'include',
        mode: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    return await res.json()
}

export default function useLogoutUser() {

    const queryClient = useQueryClient();

    return useMutation(() => logoutUser(), {
        onSuccess: () => {
            queryClient.invalidateQueries(['auth']),
            queryClient.invalidateQueries(['cart'])
        } 
    });
}