import { Router, Request, Response } from 'express';
import RecipeServices from '../../../services/recipeServices';
import authorization from '../../../authorization/auth';
const router: Router = Router()
const recipeService: RecipeServices = new RecipeServices();

const recipeHandler = async (req: Request, res: Response) => {
  try {
    const { recipe_category_id, recipe_id } = req.body;
    
    const recipeResult = await recipeService.createRecipeCategoriRecipe({recipe_category_id, recipe_id})
    const { message, status, data } = recipeResult;
    return res.status(status).send({
      message,
      data
    });
  } catch (error) {
    return res.status(500).send(error)
  }
}

router.post('/recipe/category/recipe', authorization, recipeHandler)

export default router;