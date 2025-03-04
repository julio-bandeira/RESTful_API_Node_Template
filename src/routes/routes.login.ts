import { Router } from 'express'
import loginController from '../controllers/controller.login'

const router = Router()

router.post('/', loginController.post)

export default router