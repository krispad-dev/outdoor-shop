export function formatSek(total: number) {

    if (typeof total !== 'number') {
        return null
    } else {
        return new Intl.NumberFormat('se-SE', { style: 'currency', currency: 'SEK' }).format(total)
    }

}