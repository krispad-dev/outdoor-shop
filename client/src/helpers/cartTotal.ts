import { Cart } from "../models/Cart";
import { formatSek } from './formatSek'

export function cartTotal(array: Cart[], isVat?: boolean) {

    if (!Array.isArray(array)) {
        return false
    } else {
        const total = Math.ceil(array
            .map((cartItem) => cartItem.price * cartItem.item_count)
            .reduce((acc, curr) => acc + curr
            ))

        return isVat ? formatSek(Math.ceil((total * 1.25))) : formatSek(total)

    }
}