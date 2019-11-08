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
  type = 0;
  description = '';
  picture = '';

  constructor(private router: Router, private httpClient: HttpClient) { }

  ngOnInit() {
  }

  back(){
    this.router.navigateByUrl('/ticket_option');
  }

  async submit(){
    const container = {
      amount: this.amount,
      type: this.type,
      description: this.description,
      pic: this.picture
    }
    const url = 'http://localhost:8080/project1/insert';
    const a = await this.httpClient.post(url, container).toPromise();
    let b = JSON.parse(JSON.stringify(a));
    console.log(b);
    this.router.navigateByUrl('/ticket_option');
  }

}
