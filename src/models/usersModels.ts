import { Model, DataTypes } from 'sequelize';
import sequelize from '../repositories/dbInitiation';
import UsersAttributes from '../interface/userInterface'
import recipe from './recipeModel';
class User extends Model<UsersAttributes> implements UsersAttributes {
  public id!: number;
  public name!: string;
  public password!: string;
  public email!: string

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;


  async create(payload: UsersAttributes): Promise<UsersAttributes | null>  {
    const createuser = await User.create(payload)
    
    return createuser
  }

  async findOne(email: string): Promise<UsersAttributes | null> {
    const user = await User.findOne({ where: { email }, raw: true})
    return user || null
  }

}

User.init({
  name: {
    type: new DataTypes.STRING(128),
  },
  password: {
    type: new DataTypes.STRING(128),
  },
  email: {
    type: new DataTypes.STRING(128),
  }
}, {
  tableName: "users",
  sequelize, 
})


export default User;