import { useQuery } from "react-query";

async function  getProducts() {
    const res = await fetch('api/cart')
    return await res.json()
}

export default function useGetProducts() {
    return useQuery(['cart'], () => getProducts());
  }