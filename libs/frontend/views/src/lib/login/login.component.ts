import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../../../services/src/lib/services/auth.service';

@Component({
  selector: 'athena-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  private FormSubmitAttempt!: boolean;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}
  loginFormControl = new FormControl('', [Validators.required]);
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  isFieldInvalid(field: string) {
    return (
      (!this.loginForm.get(field)?.valid &&
        this.loginForm.get(field)?.touched) ||
      (this.loginForm.get(field)?.untouched && this.FormSubmitAttempt)
    );
  }

  onSubmit() {
    console.log(this.loginForm.value);
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).then((isLoggedIn: any) => {
        if (isLoggedIn) {
          this.router.navigate(['/overview']);
        }
      });
    }
    this.FormSubmitAttempt = true;
  }
}
