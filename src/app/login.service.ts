import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from'@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { UserData } from 'src/app/models/UserData'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

    currentlyLoggedIn = false;

  constructor(private router: Router, private httpClient: HttpClient) { }

    //crate an obserable userData 
  private userSubject: Subject<UserData> = new Subject();
  public $userData: Observable<UserData>
    = this.userSubject.asObservable();
    
   loginHttp(credentials: {username: string, password: string}) {
    //debugger;
    const loginCredentials = {
      username: credentials.username,
      password: credentials.password
    };
    const url = 'http://localhost:8080/project1/login';
    console.log(loginCredentials);
    this.httpClient.post(url, loginCredentials)
        .subscribe((data) => {
          console.log(data);
        });
  }
}
