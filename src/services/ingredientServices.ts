import IngredientModel from '../models/ingredientModel';
import Iingredient from '../interface/ingredientInterface'
import { commonStatus } from '../constant/commonStatus'
class Ingredient {
  ingredientRepositories: IngredientModel;
  constructor() {
    this.ingredientRepositories = new IngredientModel();
  }

  async createIngredient<T extends Iingredient>(payload: T): Promise<{ data: {}; ok: boolean; message: string; status: number }> {
    const createRecipe = await this.ingredientRepositories.createIngredient(payload);
    if (!createRecipe) {
      return commonStatus.error('Failed create ingredient', 400, {})
    }
    return commonStatus.success('Success add ingredient', 200, {
      name: payload.name,
      description: payload.color
    })
  }
}


export default Ingredient