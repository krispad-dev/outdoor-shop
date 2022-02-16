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

export let createUpdate: any = yup.object().shape({
    product_name: yup.string().required('Fyll i produktnamn här').max(50, 'Max 50 tecken').min(4, 'Minst 4 tecken'),
    category: yup.string().required('Fyll i kategori här').max(100, 'Max 20 tecken').min(3, 'Minst 4 tecken'),
    description: yup.string().required('Fyll i beskrivning här').max(1000, 'Max 1000 tecken').min(3, 'Minst 4 tecken'),
    in_stock: yup.number().required('Fyll i lagerstatus här').max(999, 'Max antal: 999').positive(),
    price: yup.number().required('Fyll i pris här').max(99999, 'Max pris: 99999').positive(),
    image: yup.string().required('Fyll i bildlänk här').url('Fyll i giltig url')
});






export function isValidEmail(email: string) {

    let isValidEmail = yup.object().shape({
        email: yup.string().required('Fyll i din mejladress här.').email('Format: namn@dinmejl.se'),
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


// ADMIN

export function isValidProductName(product_name: string) {

    let isValidProductName = yup.object().shape({
        product_name: yup.string().required('Fyll i produktnamn här').max(50, 'Max 50 tecken').min(3, 'Minst 3 tecken'),
    });

    try {
        isValidProductName.validateSync({product_name: product_name})
    } catch (error) {
        return parseError(error)
    }
}

export function isValidDescription(decription: string) {

    let isValidDescription = yup.object().shape({
        description: yup.string().required('Fyll i beskrivning här').max(1000, 'Max 1000 tecken').min(3, 'Minst 3 tecken'),
    });

    try {
        isValidDescription.validateSync({description: decription})
    } catch (error) {
        return parseError(error)
    }
}
export function isValidCategory(category: string) {

    let isValidCategory = yup.object().shape({
        category: yup.string().required('Fyll i kategori här').max(100, 'Max 20 tecken').min(3, 'Minst 3 tecken'),
    });

    try {
        isValidCategory.validateSync({category: category})
    } catch (error) {
        return parseError(error)
    }
}
export function isValidStockValue(in_stock: number | null) {
    

    let isValidStockValue = yup.object().shape({
        in_stock: yup.number().required('Fyll i lagerstatus här').max(999, 'Max antal: 999').positive('Fyll i ett högre värde än 0'),
    });

    try {
        isValidStockValue.validateSync({in_stock: in_stock})
    } catch (error) {
        return parseError(error)
    }
}

export function isValidPrice(price: number | null) {
    

    let isValidPrice = yup.object().shape({
        price: yup.number().required('Fyll i pris här').max(99999, 'Max pris: 99999').positive('Fyll i ett högre värde än 0'),
    });

    try {
        isValidPrice.validateSync({price: price})
    } catch (error) {
        return parseError(error)
    }
}

export function isValidImageUrl(imgUrl: string) {
    

    let isValidStockValue = yup.object().shape({
        image: yup.string().required('Fyll i bildlänk här').url('Fyll i giltig url')
    });

    try {
        isValidStockValue.validateSync({image: imgUrl})
    } catch (error) {
        return parseError(error)
    }
}

