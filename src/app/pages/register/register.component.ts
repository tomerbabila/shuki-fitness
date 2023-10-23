import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@shared/services';
import { PasswordValidators } from '@utils/validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder
  ) {
    this.registerForm = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        verifyPassword: ['', [Validators.required, Validators.minLength(6)]],
      },
      { validator: PasswordValidators.passwordsMatch }
    );
  }

  register() {
    if (this.registerForm.valid) {
      const email = this.email?.value;
      const password = this.password?.value;

      this.authService.register(email, password);
    }
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get verifyPassword() {
    return this.registerForm.get('verifyPassword');
  }
}
