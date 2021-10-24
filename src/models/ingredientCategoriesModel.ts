import { Model, DataTypes } from 'sequelize';
import sequelize from '../repositories/dbInitiation';
import IngredientCategoriesAttributes from '../interface/ingredientsCategories'

class IngredientCategory extends Model<IngredientCategoriesAttributes> implements IngredientCategoriesAttributes {
  public id?: number
  public name!: string
  public parent_id!: number
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

}

IngredientCategory.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: new DataTypes.STRING(128),
  },
  parent_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    references: {
      model: 'ingredientcategory',
      key: 'id',
    }
  }

}, {
  tableName: "ingredientcategory",
  sequelize, 
})


export default IngredientCategory;