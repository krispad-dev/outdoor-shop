import * as yup from 'yup';
import { parseError } from './parseError';

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



export let loginSchema: any = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().max(12).min(6).required(),
});




export function isValidEmail(email: string) {

    let isValidEmail = yup.object().shape({
        email: yup.string().required('Fyll i din mejladress här.').email('Använd formatet: namn@dinmejl.se'),
    });

    try {
        isValidEmail.validateSync({email: email})
    } catch (error) {
        return parseError(error)
    }
}

export function isValidPassword(password: string) {

    let isValidPassword = yup.object().shape({
        password: yup.string().required('Fyll i ditt lösenord här.').max(12, 'Max tolv tecken').min(6, 'Minst sex tecken'),
    });

    try {
        isValidPassword.validateSync({password: password})
    } catch (error) {
        return parseError(error)
    }
}

