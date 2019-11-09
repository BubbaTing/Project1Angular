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
    private rounter: Router, 
    private user: UserDetailsService) { 

  }

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

  back(){
    this.rounter.navigateByUrl('ticket_option');
  }

}
