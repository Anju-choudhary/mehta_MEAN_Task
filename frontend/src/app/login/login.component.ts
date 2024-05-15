import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  login() {
    if (this.loginForm.valid) {
      console.log('Form submitted:', this.loginForm.value);
      this.authService.LoginService(this.loginForm.value).subscribe(
        (res) => {
          console.log('res', res);
          alert('Login is success!');
          console.log(res.data);
          localStorage.setItem('user_id', res.data.id);
          this.authService.isLoggedIn$.next(true);
          this.loginForm.reset();
          this.router.navigate(['employee']);
        },
        (err) => {
          console.log(err);
          this.errorMessage =
            'Incorrect username or password. Please try again.';
          console.log(this.errorMessage);
        }
      );
    }
  }
}
