import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from'@angular/common/http';
import { UserDetails } from 'src/app/user';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  currentlyLoggedIn = false;
  currentUser = {
    id: 0,
    username: 'string',
    password: 'string',
    firstName: 'string',
    lastName: 'string',
    email: 'string',
    roleID: 0
  };


  constructor(private router: Router, private httpClient: HttpClient) { }
    
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
      this.currentUser = userJSON;
      
      this.router.navigateByUrl('/ticket_option');
      this.currentlyLoggedIn = true;
    }
    return this.currentlyLoggedIn;
  }
}