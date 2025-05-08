import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [ReactiveFormsModule, CommonModule],
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.loginForm.valid) {
      console.log('Login successful', this.loginForm.value);
      if (this.loginForm.controls['email'].value === 'admin@ec.com') {
        this.router.navigate(['/admin']);
      } else {
        this.router.navigate(['/landing']);
      }
    }
  }

  get f() {
    return this.loginForm.get as (key: string) => any;
  }
}
