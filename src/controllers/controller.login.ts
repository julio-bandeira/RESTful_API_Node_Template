import {Request, Response, RequestHandler} from 'express'
import { verifyHash } from '../services/hashController'
import { generateToken } from '../services/tokenController'

import User from '../models/user'

interface RequestMethods {
    post: RequestHandler
}

const requestMethods: RequestMethods = {
    post: async (request: Request, response: Response) => {
        try {
            const {email, password} = request.body
            const findUser = await User.findOne({emailAddress: email})
            
            if(findUser) {
                const correctPassword = await verifyHash(password, findUser.passwordHash)
                if(correctPassword) {
                    const token = await generateToken(findUser._id as any, findUser.idAccount as any)
                    response.status(200).json({Authorization: token})
                }else {
                    response.status(401).json({ erro: "Invalid password!" })
                }
            }else {
                response.status(404).json({ erro: "User not found!" })
            }
        }catch(error) {
            response.status(500).json({error})
        }
    }
}

export default requestMethods