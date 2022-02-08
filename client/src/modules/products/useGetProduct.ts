import { useQuery } from "react-query";

async function  getProduct(productId?: string) {
    const res = await fetch(`api/products/1?product_id=${productId}`)
    return await res.json()
}

export default function useGetProduct(productId?: string) {
    return useQuery(['product', productId], () => getProduct(productId));
  }