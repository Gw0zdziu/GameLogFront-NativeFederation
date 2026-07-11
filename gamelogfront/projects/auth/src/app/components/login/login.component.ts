import {Component, inject, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AuthService} from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private authService = inject(AuthService);
  readonly isLogin = signal(false);

  loginUser(){
    this.isLogin.set(true);
    setTimeout(() => {this.isLogin.set(false)}, 3000)
  }

}
