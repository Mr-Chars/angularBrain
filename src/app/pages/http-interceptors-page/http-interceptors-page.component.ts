import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http-interceptors-page',
  templateUrl: './http-interceptors-page.component.html',
  styleUrls: ['./http-interceptors-page.component.css']
})
export class HttpInterceptorsPageComponent {
  constructor(private http: HttpClient) { }

  getUser() {
    this.http.get('http://something.com/api/user').subscribe((res: any) => {
      console.log(res);
    });
  }

  getProduct() {
    this.http.get('http://something.com/api/product').subscribe((res: any) => {
      console.log(res);
    });
  }

  getContact() {
    this.http.get('http://something.com/api/contact').subscribe((res: any) => {
      console.log(res);
    });
  }
}
