import jwt from 'jsonwebtoken'

// Generate a token
export const generateToken = async (idUser: string, idAccount: string): Promise<string> => {
    let token = await  jwt.sign(
        { idUser, idAccount },
        'accessToken',
        { expiresIn: '1h' }
    )
    return token
}

// Verify a token
export const verifyToken = (token: string): Promise<any> => {
    return new Promise(
        async (resolve, reject) => {
            try {
                const decoded = jwt.verify(token, 'chaveSecreta');
                resolve(decoded)
            } catch (error) {
                console.error('Token inválido!')
                reject(error)
            }
        }
    )
}