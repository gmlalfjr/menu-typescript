import { Router, Request, Response } from 'express';
import RecipeServices from '../../../services/recipeServices';
import authorization from '../../../authorization/auth';
const router: Router = Router()
const recipeService: RecipeServices = new RecipeServices();

const recipeGetHandler = async ( req: Request, res: Response) => {
  try {
    const recipeResult = await recipeService.getRecipe(res.locals.user.id)
    const { message, status, data } = recipeResult;
    return res.status(status).send({
      message,
      data
    });
  } catch (error) {
    return res.status(500).send(error)
  }
}

router.get('/recipe', authorization, recipeGetHandler)

export default router;