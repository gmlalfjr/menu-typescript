import { Model, DataTypes } from 'sequelize';
import sequelize from '../repositories/dbInitiation';
import IngredientCategoriesIngredientAttributes from '../interface/ingredientsCategoriesIngredients'

class IngredientCategoryIngredient extends Model<IngredientCategoriesIngredientAttributes> implements IngredientCategoriesIngredientAttributes {
  public id?: number
  public ingredient_category_id!: number
  public ingredient_id!: number
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

}

IngredientCategoryIngredient.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  ingredient_category_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    references: {
      model: 'ingredientcategory',
      key: 'id',
    }
  },
  ingredient_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    references: {
      model: 'ingredient',
      key: 'id',
    }
  }

}, {
  tableName: "ingredientcategoryingredient",
  sequelize, 
})


export default IngredientCategoryIngredient;