import { useQuery } from "react-query";

async function  getCart() {
    const res = await fetch('api/cart')
    return await res.json()
}

export default function useGetProducts() {
    return useQuery(['cart'], () => getCart());
  }