import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  inputUsername = '';
  inputPassword = '';

  invalidInput = false;

  constructor( private loginService: LoginService) { }

  ngOnInit() {

  }

  async submit(){
    const verify = {
      username: this.inputUsername,
      password: this.inputPassword
    };
    // console.log(verify);
    if(!this.loginService.loginHttp(verify)){
      this.invalidInput = true;
    }
  }

}