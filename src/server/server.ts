import express, {Request, Response} from 'express';
import router from '../routes/';
import bodyParser from 'body-parser';
import db from '../repositories/dbInitiation';
import recipeCategory from '../models/recipeCategoriesModel';
import recipe from '../models/recipeModel';
import user from '../models/usersModels';
import recipeCategoryRecipe from '../models/recipeCategoriesReciopeModel';
import ingredient from '../models/ingredientModel'
import ingredientCategory from '../models/ingredientCategoriesModel';
import ingredientCategoryIngredient from '../models/ingredientCategoriesIngredientModel';
import recipeStep from '../models/stepRecipeModel'

class Server {
  app;
  db;
  port: number = 5000
  constructor() {
    this.app = express()
    this.app.use(bodyParser.json())
    this.db = db
  }

  createServer() {
    router.forEach(data => {
      this.app.use(data)
    })


    this.app.listen(5000, () => {
      console.log('server running at port 5000');
    })

    user.sync()
    recipeCategory.sync()
    recipe.sync()
    recipeCategoryRecipe.sync()
    ingredient.sync()
    ingredientCategory.sync()
    ingredientCategoryIngredient.sync()
    recipeStep.sync() 
  }
}

export default Server;