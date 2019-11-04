import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticket-option',
  templateUrl: './ticket-option.component.html',
  styleUrls: ['./ticket-option.component.css']
})
export class TicketOptionComponent implements OnInit {

  role = false;

  constructor(private router: Router) { }

  ngOnInit() {
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

}
