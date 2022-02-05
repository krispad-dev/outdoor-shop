import bcrypt from 'bcrypt'


export async function bcHash(pwd: string) {

    const saltRounds = 10;
    return await bcrypt.hash(pwd, saltRounds);
    
}

export async function bcCompare(pwdInput: string, dbHash: string) {

    return await bcrypt.compare(pwdInput, dbHash);
    
}