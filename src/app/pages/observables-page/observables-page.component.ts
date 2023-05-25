import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observables-page',
  templateUrl: './observables-page.component.html',
  styleUrls: ['./observables-page.component.css']
})
export class ObservablesPageComponent {
  data: number[] = [];
  count = 0;
  myObservable: any;

  constructor() { }

  ngOnInit(): void {
    this.myObservable = new Observable<number[]>((observer) => {
      setInterval(() => {
        this.count++;
        if (this.count < 5) {
          this.data.push(this.count);
          observer.next(this.data);
        } else {
          observer.complete();
          // observer.error("DB connection is timed out");
        }
      }, 1000);
    });
  }

  getData() {
    this.myObservable.subscribe(
      (res: any) => {
        console.log(res);
      }, (err: any) => {
        console.log(err);
      }, () => {
        console.log(this.data);
        console.log('Completed');
      }
    );
  }
}
