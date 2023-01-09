/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { HttpClient } from '@angular/common/http';

import { environment } from './environment';

export class UserService {
  // users: User[];
  constructor(private httpClient: HttpClient) {
    // this.users = this.getAllUser();
  }
  host = environment.athenaHost;
  getAllUser() {
    return this.httpClient.get(this.host + '/user/userList');
  }
}
