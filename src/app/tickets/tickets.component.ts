import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from '../user-details.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  public tickets = [];
  constructor(private router: Router, private user: UserDetailsService ) { }

  i: number = 0;

  ngOnInit() {
    this.user.getDetails().subscribe(data => this.tickets = data);
  }

  back(){
    this.router.navigateByUrl('/ticket_option');
  }

}
