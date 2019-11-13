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
  allUser = {
    id: 0,
    firstName: 'string'
  }




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
    const userObject2 = await this.httpClient.get(url).toPromise();
    const userString2 = JSON.stringify(userObject2);
    const userJSON2 = JSON.parse(userString2);
    
    if (userJSON.id) {
      this.currentUser = userJSON;
      
      this.allUser = userJSON2;

      this.router.navigateByUrl('/ticket_option');
      this.currentlyLoggedIn = true;
    }

    return this.currentlyLoggedIn;
  }
}