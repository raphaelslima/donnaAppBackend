import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthResponseDto } from './auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(
    @Body('cellphone') cellphone: number,
    @Body('password') password: string,
  ): AuthResponseDto {
    return this.authService.signIn(cellphone, password);
  }
}
