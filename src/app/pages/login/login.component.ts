import { CommonModule } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  signUpForm: FormGroup;
  loginForm: FormGroup;
  constructor(
    private r2: Renderer2,
    private fb: FormBuilder,
    private apiService: ApiService,
    private router: Router
  ) {
    this.signUpForm = fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]*$')]], // Add phone number validation (only digits)
    });
    this.loginForm = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }
  activity() {
    const container = document.getElementById('container');
    this.r2.addClass(container, 'active');
  }
  deactive() {
    const container = document.getElementById('container');
    this.r2.removeClass(container, 'active');
  }
  onSubmit() {
    if (this.loginForm.valid) {
      this.apiService.login(this.loginForm.value).subscribe((res: any) => {
        console.log("res",res)
        localStorage.setItem('user_id', res.id);
        localStorage.setItem('stage', res.user_stage);
        this.router.navigate(['/community'])
      });
      // Handle login logic here, e.g., call your authentication service
    }
  }
  signUpSubmit() {
    if (this.signUpForm.valid) {
      // Handle form submission
      console.log(this.signUpForm.value);
      this.apiService
        .signUpUser(this.signUpForm.value)
        .subscribe((res: any) => {
          console.log(res);
          localStorage.setItem('user_id', res.id);
          localStorage.setItem('stage', res.user_stage);
          this.router.navigate(['on-boarding']);
        });
    } else {
      // Mark all fields as touched to show validation messages
      this.signUpForm.markAllAsTouched();
    }
  }
}
