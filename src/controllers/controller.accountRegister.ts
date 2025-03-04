import {Request, Response, RequestHandler} from 'express'
import { generateHash } from '../services/hashController'
import { generateToken } from '../services/tokenController'

import Account from '../models/account'
import User from '../models/user'

interface RequestMethods {
    post: RequestHandler
}

const requestMethods: RequestMethods = {
    post: async (request: Request, response: Response) => {
        try {
            const postAccount = await Account.insertOne(request.body.account)

            let userInsert = request.body.user
            userInsert["idAccount"] = postAccount._id
            userInsert["passwordHash"] = await generateHash(userInsert.password)
            delete userInsert.password
            
            const postUser = await User.insertOne(userInsert)

            const token = await generateToken(postUser._id as any, postUser.idAccount as any)

            response.status(200).json({Authorization: token})
        }catch(error) {
            response.status(500).json({error})
        }
    }
}

export default requestMethods