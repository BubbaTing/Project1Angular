import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  amount = 0;
  type = 0;
  description = '';
  picture = '';

  constructor(private router: Router, private httpClient: HttpClient, private loginService: LoginService) { }

  ngOnInit() {
  }

  back(){
    this.router.navigateByUrl('/ticket_option');
  }

  async submit(){
    const container = {
      description: this.description,
      author:      this.loginService.currentUser.id,
      amount:      this.amount,
      type:        this.type,
      pic:         this.picture
    }
    const url = 'http://localhost:8080/project1/insert';
    
    //sent POST data from reimbursement to backend
    await this.httpClient.post(url, container).toPromise();

    this.router.navigateByUrl('/ticket_option');
  }

}
