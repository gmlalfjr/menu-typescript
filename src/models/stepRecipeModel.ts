import { Model, DataTypes } from 'sequelize';
import sequelize from '../repositories/dbInitiation';
import StepRecipeAttributes from '../interface/stepRecipe'

class StepRecipe extends Model<StepRecipeAttributes> implements StepRecipeAttributes {
  public id!: number;
  public recipe_id!: number;
  public description!: string;
  public timer!: number
  public image!: string
  public step_number!: number


  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;


  async addRecipeStep(payload: StepRecipeAttributes) {
    
    const createuser = await StepRecipe.create(payload)
    return createuser
  }


}

StepRecipe.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  description: {
    type: new DataTypes.STRING(128),
  },
  timer: {
    type: DataTypes.INTEGER,
  },
  image: {
    type: new DataTypes.STRING(128),
  },
  step_number: {
    type: DataTypes.INTEGER
  },
  recipe_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {         
      model: 'recipes',
      key: 'id',
    }
  }
}, {
  tableName: "step",
  sequelize, 
})


export default StepRecipe;