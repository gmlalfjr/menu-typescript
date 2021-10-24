import { Router, Request, Response } from 'express';
import RecipeServices from '../../../services/recipeServices';
import authorization from '../../../authorization/auth';
const router: Router = Router()
const recipeService: RecipeServices = new RecipeServices();

const recipeHandler = async (req: Request, res: Response) => {
  try {
    const { recipe_id, timer, image, description, step_number } = req.body;
    
    const result = await recipeService.addStepRecipe({step_number,recipe_id,timer,image,description })
    const { message, status, data } = result;
    return res.status(status).send({
      message,
      data
    });
  } catch (error) {
    return res.status(500).send(error)
  }
}

router.post('/add-recipe', authorization, recipeHandler)

export default router;