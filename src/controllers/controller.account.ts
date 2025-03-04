import {Request, Response, RequestHandler} from 'express'
import Account from '../models/account'

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
            response.status(405).json({error: 'This post route is not allowed'})
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