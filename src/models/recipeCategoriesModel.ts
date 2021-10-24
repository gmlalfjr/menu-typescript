import { Model, DataTypes } from 'sequelize';
import sequelize from '../repositories/dbInitiation';
import RecipeCategoriesAttributes from '../interface/recipeCategoriesInterface'

class RecipeCategory extends Model<RecipeCategoriesAttributes> implements RecipeCategoriesAttributes {
  public name!: string;
  public parent_id!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;


  async createRecipeCategory(payload: RecipeCategoriesAttributes) {
    
    const recipeCategory = await RecipeCategory.create(payload)
    return recipeCategory
  }

}

RecipeCategory.init({
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
      model: 'recipescategori',
      key: 'id',
    }
  }
}, {
  tableName: "recipescategori",
  sequelize, 
})

// RecipeCategory.hasMany(RecipeCategory, {as: 'children', foreignKey: 'id'});
// RecipeCategory.belongsTo(RecipeCategory, {as: 'parent', foreignKey: 'id'});

export default RecipeCategory;