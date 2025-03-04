import { Router } from 'express'
import accountRegisterController from '../controllers/controller.accountRegister'

const router = Router()

router.post('/', accountRegisterController.post)

export default router