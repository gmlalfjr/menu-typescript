import { Model, DataTypes } from 'sequelize';
import sequelize from '../repositories/dbInitiation';
import Ingredient from '../interface/ingredientInterface';

class Ingredients extends Model<Ingredient> implements Ingredient {
  public id?: number
  public name!: string
  public color!: string
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  async createIngredient(payload: Ingredient) {
    
    const ingredientCategory = await Ingredients.create(payload)
    return ingredientCategory
  }
}

Ingredients.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: new DataTypes.STRING(128),
  },
  color: {
    type: new DataTypes.STRING(128),
  }
}, {
  tableName: "ingredient",
  sequelize, 
})


export default Ingredients;