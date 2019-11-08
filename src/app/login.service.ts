import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from'@angular/common/http';
import {Observable, BehaviorSubject } from 'rxjs';
import { UserData } from 'src/app/models/UserData';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  currentlyLoggedIn = false;
  UserData = {
    ers_user_id: 0,
    ers_username: 'string',
    ers_password: 'string',
    user_first_name: 'string',
    user_last_name: 'string',
    user_email: 'string',
    user_role_id: 0
  };
  constructor(private router: Router, private httpClient: HttpClient) { }

<<<<<<< Updated upstream
    //crate an obserable userData 
  private userSubject: Subject<UserData> = new Subject();
  public $userData: Observable<UserData>
    = this.userSubject.asObservable();
=======
  //create an obserable userData 
  private userSubject = new BehaviorSubject<UserData>(this.UserData);
  public userData: Observable<UserData> = this.userSubject.asObservable();
>>>>>>> Stashed changes
    
   async loginHttp(credentials: {username: string, password: string}) {
    //debugger;
    const loginCredentials = {
      username: credentials.username,
      password: credentials.password
    };
<<<<<<< Updated upstream
    const url = 'http://localhost:8080/project1/login';
    console.log(loginCredentials);
    const a = await this.httpClient.post(url, loginCredentials).toPromise();
    let b = JSON.parse(JSON.stringify(a));
    if(b.roleID === 1 || b.roleID === 2){
      this.router.navigateByUrl('/ticket_option');
      return false;
    } else {
      return true;
    }
=======

    const url        = 'http://localhost:8080/project1/login';
    await this.httpClient.post(url, loginCredentials)
      .subscribe((data: UserData) => this.userSubject.next(data));

    //console.log(this.$userData);
  
>>>>>>> Stashed changes
  }
}