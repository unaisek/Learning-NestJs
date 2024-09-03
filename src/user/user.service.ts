import { Injectable } from '@nestjs/common'
import { USERS } from './users.mock';

@Injectable()
export class UserService {
  public users = USERS;
  public async getUsers() {
    return this.users
  }
}
