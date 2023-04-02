/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {User} from '@athena/frontend/views';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class AuthService {
  isLoggedIn = false;
  loginState = new BehaviorSubject<boolean>(false);

  constructor(private router: Router, private http: HttpClient) {
    this.loginState.subscribe((state) => (this.isLoggedIn = state));
  }

  async login(user: User): Promise<boolean> {
    if (user.userName !== '' && user.password !== '') {
      this.loginState.next(true);
      return true;
    } else {
      return false;
    }
  }

  register(user: User) {
    console.group(user);
    return this.http.post('http://localhost:3000/api/auth/register', {
      name: user.userName,
      password: user.password,
      email: user.email,
    });
  }

  logout() {
    // {4}
    this.loginState.next(false);
    this.router.navigate(['/']);
  }
}
