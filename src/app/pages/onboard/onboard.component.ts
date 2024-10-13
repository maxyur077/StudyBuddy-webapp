import { Component, NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'; // Import FormsModule here
import { OnInit, Renderer2 } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-onboard',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './onboard.component.html',
  styleUrls: ['./onboard.component.scss'],
})
export class OnboardComponent implements OnInit {
  countries = [
    { name: 'United States', code: 'US', flag: '🇺🇸' },
    { name: 'Canada', code: 'CA', flag: '🇨🇦' },
    { name: 'United Kingdom', code: 'UK', flag: '🇬🇧' },
    { name: 'Australia', code: 'AU', flag: '🇦🇺' },
    { name: 'India', code: 'IN', flag: '🇮🇳' },
  ];

  // Store the selected country flag
  selectedFlag = '🌍'; // Default flag (globe)
  selectedCountry = ''; // Store the selected country code
  onCountryChange: any;
  onBoardingForm!: FormGroup;
  // Function to update the flag based on the selected country
  updateFlag() {
    const selectedCountryObj = this.countries.find(
      (country) => country.code === this.selectedCountry
    );
    this.selectedFlag = selectedCountryObj ? selectedCountryObj.flag : '🌍';
  }

  constructor(
    private renderer: Renderer2,
    private fb: FormBuilder,
    private apiService: ApiService,
    private router: Router
  ) {
    this.onBoardingForm = this.fb.group({
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      country: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.onBoardingForm.valid) {
      console.log('Form Submitted!', this.onBoardingForm.value);
      this.apiService
        .signUpComplete(
          this.onBoardingForm.value,
          localStorage.getItem('user_id')
        )
        .subscribe((res: any) => {
          localStorage.setItem('stage', res.user_stage);
          this.router.navigate(['community']);
        });
    }
  }
  ngOnInit() {
    const mobileInput = this.renderer.selectRootElement('#mobile-number', true);

    this.renderer.listen(mobileInput, 'input', () => {
      // Remove non-numeric characters
      mobileInput.value = mobileInput.value.replace(/[^0-9]/g, '');

      // Limit to 10 digits
      if (mobileInput.value.length > 10) {
        mobileInput.value = mobileInput.value.slice(0, 10);
      }

      // Validate length for mobile number
      const errorMessage = document.getElementById('error-message');
      if (mobileInput.value.length !== 10) {
        if (errorMessage) {
          const textContent = document.getElementById('error');
        }
      } else {
        if (errorMessage) {
          errorMessage.textContent = '';
        }
      }
    });
  }
}
