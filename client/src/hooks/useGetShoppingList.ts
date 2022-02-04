import { useQuery } from "react-query";

async function  getProducts(searchString?: string) {
    const res = await fetch('api/items')
    return await res.json()
}

export default function useGetShoppingList(searchString?: string) {
    return useQuery(['shoppingList', searchString], () => getProducts(searchString));
  }