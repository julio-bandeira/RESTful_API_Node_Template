import bcrypt from 'bcrypt';

export const generateHash = async (password: string): Promise<string> => {
    const saltRounds = 10; // Define o nível de segurança do hash
    const hash = await bcrypt.hash(password, saltRounds)
    return hash
}

export const verifyHash = async (password: string, passwordHash: string): Promise<boolean> => {
    return await bcrypt.compare(password, passwordHash)
}