import { Component } from '@angular/core';

@Component({
  selector: 'app-promises-page',
  templateUrl: './promises-page.component.html',
  styleUrls: ['./promises-page.component.css']
})
export class PromisesPageComponent {
  isOnline = false;
  status = 'offline';
  myPromise: any;

  constructor() { }

  ngOnInit(): void {
    this.getStatus();
    this.myPromise.then((res: any) => {
      console.log(res);
      this.checkLogic();
    }, (err: any) => {
      console.log(err);
    }
    );
  }

  getStatus() {
    console.log('Get Status called');
    this.myPromise = new Promise<boolean>((resolve, reject) => {
      setTimeout(() => {
        console.log('Received Status Value');
        this.isOnline = true;
        resolve(this.isOnline);
        // reject("DB Connection Error");
      }, 3000);
    });
  }

  checkLogic() {
    console.log('Check Logic called');
    if (this.isOnline) {
      this.status = 'online';
    } else {
      this.status = 'offline';
    }
  }
}
