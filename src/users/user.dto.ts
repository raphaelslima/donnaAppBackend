import { Document } from 'mongoose';

export class UserDto extends Document {
  firstname: string;
  lastname: string;
  dateOfBirth: string;
  cpf: number;
  gender: string;
  cep: number;
  state: string;
  city: string;
  adress: string;
  number: string;
  additionalAddressData: string;
  cellphone: number;
  email: string;
  password: string;
}
