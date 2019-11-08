import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
<<<<<<< Updated upstream
=======
import { LoginService } from '../login.service';
import { Subscription } from 'rxjs';
>>>>>>> Stashed changes

@Component({
  selector: 'app-ticket-option',
  templateUrl: './ticket-option.component.html',
  styleUrls: ['./ticket-option.component.css']
})
export class TicketOptionComponent implements OnInit {

  name = '';
  roleID = 0;
  role = false;
  userSubscription: Subscription;

  constructor(private router: Router) { }

  ngOnInit() {
    this.userSubscription = this.loggedIn.$userData
      .subscribe(data => this.name = 'data.user_first_name');
  }

  tickets(){
    this.router.navigateByUrl('/tickets');
  }

  request(){
    this.router.navigateByUrl('/request');
  }

  requests(){
    this.router.navigateByUrl('/requests');
  }

  logout(){
    this.router.navigateByUrl('/login');
  }
}
