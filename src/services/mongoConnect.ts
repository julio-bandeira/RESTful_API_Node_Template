import dotenv from 'dotenv'
import mongoose from "mongoose"

dotenv.config()

export const connectMongoDb = () => {
    return new Promise(
        async (resolve, reject) => {
            mongoose.connect(
                process.env.URL_MONGODB as string,
                {}// entender os parametros
            ).then(
                () => {
                    console.error('Connected to MongoDB')
                    resolve('Connected to MongoDB')
                }
            ).catch(
                (err) => {
                    console.error('Error connecting to MongoDB:', err)
                    reject('Error connecting to MongoDB')
                }
            )
        }
    )
}