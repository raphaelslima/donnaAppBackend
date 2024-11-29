import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  dateOfBirth: String,
  cpf: Number,
  gender: String,
  cep: Number,
  state: String,
  city: String,
  adress: String,
  number: String,
  additionalAddressData: String,
  cellphone: Number,
  email: String,
  password: String,
});
