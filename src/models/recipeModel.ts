import { Model, DataTypes } from 'sequelize';
import sequelize from '../repositories/dbInitiation';
import RecipeAttributes from '../interface/recipeInterface'

class Recipe extends Model<RecipeAttributes> implements RecipeAttributes {
  public id!: number;
  public name!: string;
  public description!: string;
  public recipes_category_id! : number
  public author_id!: number

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;


  async createRecipe(payload: RecipeAttributes) {
    
    const createuser = await Recipe.create(payload)
    return createuser
  }

  async getRecipe(author_id: number) {
    const get = await Recipe.findAll({ where: { author_id } })
    return get
  }

}

Recipe.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: new DataTypes.STRING(128),
  },
  description: {
    type: new DataTypes.STRING(128),
  },
  author_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {         
      model: 'users',
      key: 'id',
    }
  }
}, {
  tableName: "recipes",
  sequelize, 
})


export default Recipe;