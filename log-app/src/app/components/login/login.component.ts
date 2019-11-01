import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //Input Values
  useremail = ' ';
  userpassword = ' ';
  // flag set to true when user supplies invalid input
  invalidInput = false;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  submit(){
    const credential = {
      email: this.useremail,
      password: this.userpassword
    };
    console.log(credential);
  }

}
