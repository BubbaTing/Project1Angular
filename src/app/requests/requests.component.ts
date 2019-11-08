import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserDetailsService } from '../user-details.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  public requests = [];

  constructor(private httpClient: HttpClient, private user: UserDetailsService) { 

  }

  ngOnInit() {
    this.user.getAllDetails().subscribe(data => this.requests = data);
  }

  approve() {
    this.user.setApproval();
  }

  deny() {
    this.user.setApproval();
  }

}
