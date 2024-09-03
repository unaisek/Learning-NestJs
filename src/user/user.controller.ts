import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private _userService: UserService) {}

  @Get()
  async getUsers(){
    return this._userService.getUsers()
  }
}
