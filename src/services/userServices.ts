import UserModel from '../models/usersModels';

import IuserLogin from '../interface/userInterface'
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import {commonStatus} from '../constant/commonStatus'
class UserServices {
  userRepositories: UserModel;
  constructor() {
    this.userRepositories = new UserModel();
  };

  async registerUser<T extends IuserLogin>(payload: T): Promise<{message: string, status: number, data: {}}> {

    const findOne = await this.userRepositories.findOne(payload.email)
    if(findOne) { 
      return commonStatus.error('User Already Exist', 409, {});
    }
    const hashedPassword: string = await this._hashPassword(payload.password)

    const saveUser: IuserLogin = {
      name : payload.name,
      password: hashedPassword,
      email: payload.email
    }
    const save = await this.userRepositories.create(saveUser);
    if (!save) {
      return commonStatus.error('Failed create user', 400, {});
    }
    return commonStatus.success('Register Success', 202, {
      name: payload.name,
    })
  }

  _hashPassword(password: string): Promise<string> {
    const bcrypts: Promise<string> = new Promise((resolve
      ): void => {
      bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(password, salt, function(err, hash) {
           resolve(hash)
        });
      });
    });
    return bcrypts
  }

  async loginUser<T extends IuserLogin>(payload: T): Promise<{message: string, status: number, data: {}}> {
    if (!payload.email || !payload.password) {
      return commonStatus.error('pls input all field', 400, {})
    }
    const findUser = await this.userRepositories.findOne(payload.email)
    
    const comparePassword = await bcrypt.compare(payload.password, findUser!.password);
    
    if (!findUser || !comparePassword){
      return commonStatus.error('User Not Found', 404, {})
    }
    
    const generateToken = this.generateToken({ id: findUser!.id!})
    return commonStatus.success('Success Login', 200, { token : generateToken })
  }

  generateToken(user: object) {  
    return jwt.sign(user, process.env.JWT_SECRET ?? 'SECRET', { expiresIn: '300m' });
  }
}


export default UserServices;