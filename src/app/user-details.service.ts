import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TicketDetails } from './viewTickets';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  private url: string ='http://localhost:8080/project1/response';

  public TicketDetails: any[]

  constructor(private http: HttpClient ) { }

  getDetails(): Observable<tickets_details[]>{
    const currentUser = {
      author: 7
    }

    return this.http.post<tickets_details[]>(this.url, currentUser);
  }
}
