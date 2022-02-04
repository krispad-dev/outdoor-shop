import bcrypt from 'bcrypt'


export async function bcHash(pwd: string) {

    const saltRounds = 10;
    return await bcrypt.hash(pwd, saltRounds);
    
}