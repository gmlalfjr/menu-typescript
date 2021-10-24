import { Router, Request, Response } from 'express';
import UserServices from '../../../services/userServices';

const router: Router = Router()
const userService: UserServices = new UserServices();

const registerHandler = async ( req: Request, res: Response) => {
  try {
    const { name, password, email } = req.body;
    const regisResult = await userService.registerUser({ name, password, email})
    const { message, status, data } = regisResult;
    return res.status(status).send({
      message,
      data
    });
  } catch (error) {
    return res.status(500).send(error)
  }
}

router.post('/register', registerHandler)

export default router;