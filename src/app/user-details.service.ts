import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ticketsDetails } from './viewTickets';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  private url: String ='http://localhost:8081/project1/response';

  constructor(private http: HttpClient ) { }

  getDetails(): Observable<ticketsDetails[]>{

    return this.http.get<ticketsDetails>(this);
  }
}
