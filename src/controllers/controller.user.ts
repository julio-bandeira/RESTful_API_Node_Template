import {Request, Response, RequestHandler} from 'express'
import { generateHash } from '../services/hashController'
import User from '../models/user'

interface RequestMethods {
    get: RequestHandler,
    post: RequestHandler,
    put: RequestHandler,
    patch: RequestHandler,
    delete: RequestHandler,
}

const requestMethods: RequestMethods = {
    get: async (request: Request, response: Response) => {
        try {
            response.status(200).json({})
        }catch(error) {
            response.status(500).json({error})
        }
    },
    post: async (request: Request, response: Response) => {
        try {
            let userInsert = request.body
            userInsert["passwordHash"] = await generateHash(userInsert.password)
            delete userInsert.password
            
            const postUser = await User.insertOne(userInsert)

            response.status(200).json({})
        }catch(error) {
            response.status(500).json({error})
        }
    },
    put: async (request: Request, response: Response) => {
        try {
            response.status(200).json({})
        }catch(error) {
            response.status(500).json({error})
        }
    },
    patch: async (request: Request, response: Response) => {
        try {
            response.status(200).json({})
        }catch(error) {
            response.status(500).json({error})
        }
    },
    delete: async (request: Request, response: Response) => {
        try {
            response.status(200).json({})
        }catch(error) {
            response.status(500).json({error})
        }
    }
}

export default requestMethods