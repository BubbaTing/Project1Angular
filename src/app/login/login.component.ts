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
  roleID = 0;

  invalidInput = false;
  loginSuccessful = false;
  
  userSubscription: Subscription;
  
  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit() {
    this.userSubscription = this.loginService.userData
    .subscribe(data => {
      //onsole.log(JSON.stringify(data))
      this.roleID = data.user_role_id;
    });
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