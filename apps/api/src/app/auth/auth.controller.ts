import { User } from '@athena/frontend/views';
import { Body, Controller, Get, HttpStatus, Param, Post, Res } from '@nestjs/common';

import { AuthService } from './auth.service';

@Controller('api')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get('/login')
  login(
    @Param('username') username: string,
    @Param('password') password?: string
  ): User {
    return this.authService.login(username, password);
  }

  @Post('/register')
  async saveUser(@Res() response, @Body() user: User) {
    const newUser = await this.authService.register(user);
    console.log('User saved');
    return response.status(HttpStatus.CREATED).json({ newUser });
  }
}
