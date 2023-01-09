import { User } from '@athena/frontend/views';

/* eslint-disable @typescript-eslint/no-empty-function */
export class AuthService {
  constructor() {}
  register(user: User): Promise<User> {
    return;
  }

  login(username: string, password: string): User {
    throw new Error('Method not implemented.');
  }
}
