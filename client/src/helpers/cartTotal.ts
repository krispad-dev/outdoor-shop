import { Cart } from "../models/Cart";
import { formatSek } from './formatSek'

export function cartTotal(array: Cart[], isVat?: boolean) {



    if (!Array.isArray(array)) {
        return false
    } else {
        const total = array.map((cartItem) => cartItem.price).reduce((acc, curr) => acc + curr)

        return isVat ? formatSek((total * 1.25)) : formatSek(total)

    }
}