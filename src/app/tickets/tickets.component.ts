import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from '../user-details.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  public ticket = [];
  constructor(private user: UserDetailsService ) { }

  ngOnInit() {
    this.user.getDetails().subscribe(data => this.ticket = data);
  }

}
