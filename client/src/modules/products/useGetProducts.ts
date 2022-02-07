import { useQuery } from "react-query";

async function  getProducts(searchString?: string) {
    const res = await fetch('api/products')
    return await res.json()
}

export default function useGetProducts(searchString?: string) {
    return useQuery(['products', searchString], () => getProducts(searchString));
  }