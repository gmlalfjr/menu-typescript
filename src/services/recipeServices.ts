import Irecipe from '../interface/recipeInterface'
import IrecipeCategories from '../interface/recipeCategoriesInterface'
import IrecipeCategoriesRecipe from '../interface/recipeCategoryRecipeInterface'
import IstepRecipe from '../interface/stepRecipe'
import { commonStatus } from '../constant/commonStatus'
import ReceipeModel from '../models/recipeModel'
import RecipeCategory from '../models/recipeCategoriesModel'
import RecipeCategoryRecipe from '../models/recipeCategoriesReciopeModel'
import RecipeStep from '../models/stepRecipeModel'

class RecipeServices {
  recipeRepositories: ReceipeModel;
  recipeCategoryRepositories: RecipeCategory
  recipeCategoryRecipeRepositories: RecipeCategoryRecipe
  recipeStep: RecipeStep
  constructor() {
    this.recipeRepositories = new ReceipeModel();
    this.recipeCategoryRepositories = new RecipeCategory();
    this.recipeCategoryRecipeRepositories = new RecipeCategoryRecipe();
    this.recipeStep = new RecipeStep();
  };
  async createRecipe<T extends Irecipe>(payload: T): Promise<{ data: {}; ok: boolean; message: string; status: number }> {
    const createRecipe = await this.recipeRepositories.createRecipe(payload);
    if (!createRecipe) {
      return commonStatus.error('Failed create recipe', 400, {})
    }
    return commonStatus.success('Success add Data', 202, {
      name: payload.name,
      description: payload.description
    })
  }

  async getRecipe(author_id: number): Promise<{ data: {}; ok: boolean; message: string; status: number }> {
    const getMineRecipe = await this.recipeRepositories.getRecipe(author_id);

    return commonStatus.success('Success add Data', 202, getMineRecipe)
  }

  async createRecipeCategori<T extends IrecipeCategories>(payload: T): Promise<{ data: {}; ok: boolean; message: string; status: number }> {
    const addRecipeCategory = await this.recipeCategoryRepositories.createRecipeCategory(payload);
    
    return commonStatus.success('Success add Data', 202, addRecipeCategory)
  }

  async createRecipeCategoriRecipe<T extends IrecipeCategoriesRecipe>(payload: T): Promise<{ data: {}; ok: boolean; message: string; status: number }> {
    const addRecipeCategory = await this.recipeCategoryRecipeRepositories.createRecipeCategory(payload);
    
    return commonStatus.success('Success add Data', 202, addRecipeCategory)
  }

  async addStepRecipe<T extends IstepRecipe>(payload: T): Promise<{ data: {}; ok: boolean; message: string; status: number }> {
    const addRecipeCategory = await this.recipeStep.addRecipeStep(payload);
    
    return commonStatus.success('Success add Data', 202, addRecipeCategory)
  }
}

export default RecipeServices