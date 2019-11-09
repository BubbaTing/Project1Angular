import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from '../user-details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  public requests = [];
  pending = true;

  constructor(
    private router: Router, 
    private user: UserDetailsService
  ) {};

  ngOnInit() {    
    this.user.getAllDetails().subscribe(data => this.requests = data);
  }


  approve(value: number, status: number) {
    this.user.setApproval(value, status);
    this.requests = [];
    this.user.getAllDetails().subscribe(data => this.requests = data);
  }

  deny(value: number, status: number) {
    this.user.setApproval(value, status);
    this.requests = [];
    this.user.getAllDetails().subscribe(data => this.requests = data);
  }

  //this sorting works atm because all properties happen to be lexicographically sortable in JS by default.
  //if that changes, the code will have to change.
  sortByProperty(propertyDesc) {
    this.requests.sort((a,b) => a[propertyDesc] - b[propertyDesc]);
  }

  back() {
    this.router.navigateByUrl('ticket_option');
  }

}
