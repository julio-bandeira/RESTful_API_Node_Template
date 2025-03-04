import { Router } from 'express'
import accountController from '../controllers/controller.account'

const router = Router()

router.get('/', accountController.get)
router.post('/', accountController.post)
router.put('/', accountController.put)
router.patch('/', accountController.patch)
router.delete('/', accountController.delete)

export default router