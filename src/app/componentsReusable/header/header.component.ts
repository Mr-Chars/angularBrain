import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router: Router) { }

  ngOnInit(): void { }

  goToDirectives() {
    this.router.navigate(['directives']);
  }

  goToPromises() {
    this.router.navigate(['promises']);
  }

  goToObservables() {
    this.router.navigate(['Observables']);
  }

  goToForkJoin() {
    this.router.navigate(['forkJoin']);
  }

  goToHttpInterceptors() {
    this.router.navigate(['httpInterceptors']);
  }

  goToNgForTrackBy() {
    this.router.navigate(['ngForTrackBy']);
  }

  goToAbout() {
    this.router.navigate(['about']);
  }

  goToContact() {
    this.router.navigate(['contact']);
  }

  goToAdmin() {
    this.router.navigate(['admin']);
  }

  goToOffers() {
    this.router.navigate(['offers']);
  }
}
