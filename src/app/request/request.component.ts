import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  amount = 0;
  type = '';
  description = '';
  picture = '';

  constructor(private router: Router, private httpClient: HttpClient) { }

  ngOnInit() {
  }

  async sumbit(){
    const container = {
      amount: this.amount,
      type: this.type,
      description: this.description,
      picture: this.picture
    }
    const url = 'http://localhost:8080/project1/insert';
    const a = await this.httpClient.post(url, container).toPromise();
    let b = JSON.parse(JSON.stringify(a));
    console.log(b);
  }

}
