import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { AdminComponent } from './admin/admin.component';
import { ContactComponent } from './contact/contact.component';
import { EditAboutComponent } from './edit-about/edit-about.component';
import { OffersComponent } from './offers/offers.component';
import { RouterModule } from '@angular/router';
import { DirectivesPageComponent } from './directives-page/directives-page.component';
import { ObservablesPageComponent } from './observables-page/observables-page.component';
import { ComponentsModule } from '../components/components.module';
import { PromisesPageComponent } from './promises-page/promises-page.component';
import { ForkJoinPageComponent } from './fork-join-page/fork-join-page.component';
import { HttpInterceptorsPageComponent } from './http-interceptors-page/http-interceptors-page.component';
import { HttpClientModule } from '@angular/common/http';
import { NgForTrackByPageComponent } from './ng-for-track-by-page/ng-for-track-by-page.component';



@NgModule({
  declarations: [
    AboutComponent,
    AccessDeniedComponent,
    AdminComponent,
    ContactComponent,
    EditAboutComponent,
    DirectivesPageComponent,
    ObservablesPageComponent,
    PromisesPageComponent,
    ForkJoinPageComponent,
    HttpInterceptorsPageComponent,
    NgForTrackByPageComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    ComponentsModule,
  ],
  exports: [
    AboutComponent,
    AccessDeniedComponent,
    AdminComponent,
    ContactComponent,
    EditAboutComponent,
    DirectivesPageComponent,
    ObservablesPageComponent,
    PromisesPageComponent,
  ]
})
export class PagesModule { }
