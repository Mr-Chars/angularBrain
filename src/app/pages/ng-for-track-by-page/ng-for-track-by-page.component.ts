import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for-track-by-page',
  templateUrl: './ng-for-track-by-page.component.html',
  styleUrls: ['./ng-for-track-by-page.component.css']
})
export class NgForTrackByPageComponent {
  users = [
    { id: 1, name: 'Harry' },
    { id: 2, name: 'Ron' },
    { id: 3, name: 'Hermione' },
    { id: 4, name: 'Snape' },
    { id: 5, name: 'Hagrid' },
  ];

  refresh() {
    this.users = [
      { id: 1, name: 'Harry' },
      { id: 2, name: 'Ron' },
      { id: 4, name: 'Sirius' },
      { id: 5, name: 'Hagrid' },
      { id: 6, name: 'Dumbledore' },
    ];
  }

  trackByUser(index: number, item: any) {
    // return index
    return item.id
  }
}
