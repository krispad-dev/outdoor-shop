import { useQuery } from "react-query";

async function fetchFunction() {
    
    const res = await fetch('api/auth', {
            method: 'POST',
            credentials: 'include',
            mode: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
    })
    return await res.json()
}

export default function useAuth() {

    return useQuery(['auth'], () => fetchFunction());

}