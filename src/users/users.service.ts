import { Injectable } from '@nestjs/common';
import { UserDto } from './user.dto';
import { hashSync as bcryptHashSync } from 'bcrypt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  private readonly users: UserDto[] = [];

  constructor(
    @InjectModel('User') private readonly userModel: Model<UserDto>,
  ) {}

  async create(newUser: UserDto) {
    newUser.password = bcryptHashSync(newUser.password, 10);
    const createdUser = new this.userModel(newUser);
    return await createdUser.save();
  }

  async getAll() {
    return await this.userModel.find().exec();
  }

  async getById(id: string) {
    return await this.userModel.findById(id).exec();
  }

  async update(id: string, user: UserDto) {
    await this.userModel.updateOne({ _id: id }, user).exec();
    return this.getById(user.id);
  }

  async delete(id: string) {
    await this.userModel.deleteOne({ _id: id }).exec();
  }
}
