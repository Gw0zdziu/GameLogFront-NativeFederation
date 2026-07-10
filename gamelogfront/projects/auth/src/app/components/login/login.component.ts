import {Component, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {InputText} from 'primeng/inputtext';
import {Password} from 'primeng/password';
import {ButtonDirective, ButtonLabel} from 'primeng/button';

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

  loginUser(){
    console.log("login");
  }

}
