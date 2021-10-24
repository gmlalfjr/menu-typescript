import addRecipe from './addRecipe/handler'
import getRecipe from './getAllRecipe/handler'
import recipeCategory from './addRecipeCategories/handler'
import recipeCategoryRecipe from './addRecipeCategoryRecipe/handler'
import addStep from './addStepRecipe/handler'

export default [
  addRecipe,
  getRecipe,
  recipeCategory,
  recipeCategoryRecipe,
  addStep
]