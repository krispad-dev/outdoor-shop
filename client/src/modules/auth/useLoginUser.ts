import { useQueryClient, useMutation } from "react-query";

export interface LoginUser {
    email: string,
    password: string
}

async function fetchFunction(data: LoginUser) {

    const res = await fetch('api/auth/login', {
        method: 'POST',
        credentials: 'include',
        mode: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user_password: data.password, email: data.email })
    })
    return await res.json()
}

export default function useLoginUser() {

    const queryClient = useQueryClient();

    return useMutation((data: LoginUser) => fetchFunction(data), {
        onSuccess: () => {
            queryClient.invalidateQueries(['auth']),
            queryClient.invalidateQueries(['cart'])
        } 

    });
}