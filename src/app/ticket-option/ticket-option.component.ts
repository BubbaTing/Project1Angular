import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-ticket-option',
  templateUrl: './ticket-option.component.html',
  styleUrls: ['./ticket-option.component.css']
})
export class TicketOptionComponent implements OnInit {
  admin = false;

  constructor(private router: Router, private loggedIn: LoginService) { }

  ngOnInit() {
    if (this.loggedIn.currentUser.roleID === 2){
      this.admin = true;
    }
  }

  tickets() {
    this.router.navigateByUrl('/tickets');
  }

  request() {
    this.router.navigateByUrl('/request');
  }

  requests() {
    this.router.navigateByUrl('/requests');
  }

  logout() {
    this.loggedIn.currentlyLoggedIn = false
    this.router.navigateByUrl('/login');
  }
}
