export function isEmpty(string: string): boolean {

    if (string.length > 0) {
        return false
    } else {
        return true
    }

}


export function isEmail(input: string): boolean {

    const mail = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;

    if (input.match(mail)) {
        return true;
    }
    else {
        return false;
    }
}