import { HttpClient } from '@angular/common/http';
import { User } from '@athena/frontend/views';
import { map } from 'rxjs/operators';

import { environment } from './environment';

export class UserService {
  constructor(private httpClient: HttpClient) {}
  host = environment.athenaHost;
  getAllUser() {
    return this.httpClient
      .get(this.host + '/user/userList')
      .pipe(map((users) => users as User[]));
  }
}
