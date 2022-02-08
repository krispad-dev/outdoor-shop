import { Cart } from "../models/Cart";

export function isInCart(array: Cart[], id: string): boolean {

    if (!Array.isArray(array)) {
        return false
    } else {
        return array.some((cartItem: Cart) => cartItem.product_id === parseInt(id));
    }

}