import {Component, inject, signal} from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import {AuthService} from '../../services/auth/auth.service';
import {LoginUser} from '../../models/login-user';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  readonly isLogin = signal(false);
  private authService = inject(AuthService);

  loginUser(loginForm: NgForm){
    if (loginForm.valid) {
      this.isLogin.set(true);
      const loginUser: LoginUser = loginForm.value;
      this.authService.loginUser(loginUser)
        .subscribe({
          next: () => {
          },
          error: () => {
            this.isLogin.set(false);
          }
        })
    }
  }



}
