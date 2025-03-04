import dotenv from 'dotenv'
import express from 'express'
import routes from './routes/_routesController'
import { connectMongoDb } from './services/mongoConnect' 

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(routes)

connectMongoDb().then(
    () => {
        app.listen(port, () => {
            console.log('API is operational')
        })
    }
)
