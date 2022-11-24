import { HttpClient } from '@angular/common/http';

/* eslint-disable @typescript-eslint/no-empty-function */
export class UserService {
  constructor(private httpClient: HttpClient) {}

  getAllUser() {
    this.httpClient.get('');
  }
}
