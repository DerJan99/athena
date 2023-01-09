import { USERLIST } from './userList';

export class UserService {
  getAllUser() {
    const userList = USERLIST;
    return userList;
  }
}
