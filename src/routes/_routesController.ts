import { Router } from 'express'

import loginRoute from './routes.login'
import accountRegisterRoute from './routes.accountRegister'
import accountRoute from './routes.account'
import userRoute from './routes.user'

const routes = Router()

routes.use('/login', loginRoute)
routes.use('/accountRegister', accountRegisterRoute)
routes.use('/account', accountRoute)
routes.use('/user', userRoute)

export default routes