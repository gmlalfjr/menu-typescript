import { Model, DataTypes } from 'sequelize';
import sequelize from '../repositories/dbInitiation';
import RecipeCategoryRecipeInterface from '../interface/recipeCategoryRecipeInterface'

class RecipeCategoryRecipe extends Model<RecipeCategoryRecipeInterface> implements RecipeCategoryRecipeInterface {
  public recipe_category_id!: number;
  public recipe_id!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;


  async createRecipeCategory(payload: RecipeCategoryRecipeInterface) {
    
    const recipeCategory = await RecipeCategoryRecipe.create(payload)
    return recipeCategory
  }

}

RecipeCategoryRecipe.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  recipe_category_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    references: {
      model: 'recipescategori',
      key: 'id',
    }
  },
  recipe_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    references: {
      model: 'recipes',
      key: 'id',
    }
  },
}, {
  tableName: "recipescategorirecipes",
  sequelize, 
})


export default RecipeCategoryRecipe;