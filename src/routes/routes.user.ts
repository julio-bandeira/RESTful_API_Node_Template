import { Router } from 'express'
import userController from '../controllers/controller.user'

const router = Router()

router.get('/', userController.get)
router.post('/', userController.post)
router.put('/', userController.put)
router.patch('/', userController.patch)
router.delete('/', userController.delete)

export default router