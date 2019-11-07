import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from'@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { UserData } from 'src/app/models/UserData';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  currentlyLoggedIn = false;

  constructor(private router: Router, private httpClient: HttpClient) { }

  //create an obserable userData 
  private userSubject: Subject<UserData> = new Subject();
  public $userData: Observable<UserData> = this.userSubject.asObservable();
    
  async loginHttp(credentials: {username: string, password: string}) {

    const loginCredentials = {
      username: credentials.username,
      password: credentials.password
    };

    const url        = 'http://localhost:8080/project1/login';
    const userObject = await this.httpClient.post(url, loginCredentials).toPromise();
    const userString = JSON.stringify(userObject);
    const userJSON   = JSON.parse(userString);
    
    if (userJSON.id) {
      this.router.navigateByUrl('/ticket_option');
      this.currentlyLoggedIn = true;
    }
    
    return this.currentlyLoggedIn;
  }
}