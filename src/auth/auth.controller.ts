import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authservice: AuthService) {}
  @Post('login')
  login() {
    return 'This action returns a jwt token';
  }

  @Post('signup')
  signup() {
    return 'This action creates a new user';
  }
}
