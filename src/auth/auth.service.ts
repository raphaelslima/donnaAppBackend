import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(cellphone: number, password: string): Promise<any> {
    const user = await this.userService.findOne(cellphone, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    const payload = { userCellphone: user.cellphone };
    const token = {
      access_token: await this.jwtService.signAsync(payload),
    };
    return token;
  }
}
