import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TicketDetails } from './viewTickets';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  private url: string ='http://localhost:8080/project1/response';
  
  private managerURL: string = 'http://localhost:8080/project1/manager';

  private updateURL: string = "http://localhost:8080/project1/update";

  public TicketDetails: any[];

  constructor(private http: HttpClient ) { }

  getAllDetails(): Observable<TicketDetails[]> {
    return this.http.get<TicketDetails[]>(this.managerURL);
  }

  getDetails(): Observable<TicketDetails[]>{
    const currentUser = {
      author: 7
    }

    return this.http.post<TicketDetails[]>(this.url, currentUser);
  }

  setApproval() {
    const currentUser = {
      aurthor: this.TicketDetails,
      status: this.TicketDetails
    }
    return this.http.post(this.updateURL, currentUser);
  }
}
