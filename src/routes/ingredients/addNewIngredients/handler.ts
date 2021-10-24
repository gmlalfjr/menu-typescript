import { Router, Request, Response } from 'express';
import IngredientServices from '../../../services/ingredientServices';
import authorization from '../../../authorization/auth';
const router: Router = Router()
const ingredientService: IngredientServices = new IngredientServices();

const recipeHandler = async (req: Request, res: Response) => {
  try {
    const { name, color} = req.body;

    const result = await ingredientService.createIngredient({ name, color })
    const { message, status, data } = result;
    return res.status(status).send({
      message,
      data
    });
  } catch (error) {
    return res.status(500).send(error)
  }
}

router.post('/ingredient', authorization, recipeHandler)

export default router;