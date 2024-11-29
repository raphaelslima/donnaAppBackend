import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './user.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  create(@Body() user: UserDto): Promise<UserDto> {
    return this.usersService.create(user);
  }

  @Get()
  async getAll(): Promise<UserDto[]> {
    return this.usersService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<UserDto> {
    return this.usersService.getById(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() user: UserDto,
  ): Promise<UserDto> {
    return this.usersService.update(id, user);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    this.usersService.delete(id);
  }
}
