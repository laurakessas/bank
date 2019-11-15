import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';
import { UsersService } from './users/users.service';
import { jwtConstants } from './auth/constants';
import { User } from './users/users.service';

const jwt = require('jsonwebtoken');
@Controller()
export class AppController {

  constructor(private readonly authService: AuthService, private readonly userService: UsersService) { }

  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.body);
  }
  @Post('/user/create')
  async create(@Request() req) {
    return this.userService.createOne(req.body);
  }

  @Post('deposit/create')
  async createDeposit(@Request() req) {
    const token = req.headers['access_token'];
    var decoded = jwt.decode(token, jwtConstants.secret)
    const user: User = this.userService.findOne(decoded['accountId'])
    if (req.body['amount'] > decoded['max'] || req.body['amount'] < user.amount) {
      return 'echec';
    }
    return 'success';
    //return decoded;


  }

}
