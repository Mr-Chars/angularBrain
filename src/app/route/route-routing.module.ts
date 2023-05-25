import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { ModuleGuard } from '../guards/module.guard';
import { NotCompleteGuard } from '../guards/not-complete.guard';
import { RoleGuard } from '../guards/role.guard';
import { AboutComponent } from '../pages/about/about.component';
import { AccessDeniedComponent } from '../pages/access-denied/access-denied.component';
import { AdminComponent } from '../pages/admin/admin.component';
import { ContactComponent } from '../pages/contact/contact.component';
import { DirectivesPageComponent } from '../pages/directives-page/directives-page.component';
import { EditAboutComponent } from '../pages/edit-about/edit-about.component';
import { ForkJoinPageComponent } from '../pages/fork-join-page/fork-join-page.component';
import { HttpInterceptorsPageComponent } from '../pages/http-interceptors-page/http-interceptors-page.component';
import { NgForTrackByPageComponent } from '../pages/ng-for-track-by-page/ng-for-track-by-page.component';
import { ObservablesPageComponent } from '../pages/observables-page/observables-page.component';
import { PromisesPageComponent } from '../pages/promises-page/promises-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'directives', pathMatch: 'full' },
  { path: 'directives', component: DirectivesPageComponent },
  { path: 'promises', component: PromisesPageComponent },
  { path: 'Observables', component: ObservablesPageComponent },
  { path: 'forkJoin', component: ForkJoinPageComponent },
  { path: 'httpInterceptors', component: HttpInterceptorsPageComponent },
  { path: 'ngForTrackBy', component: NgForTrackByPageComponent },

  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'contact', component: ContactComponent, canDeactivate: [NotCompleteGuard] },
  {
    path: 'offers', canLoad: [ModuleGuard], loadChildren: () =>
      import('../pages/offers/offers.module').then((m) => m.OffersModule)
  },
  {
    path: 'about',
    component: AboutComponent,
    canActivateChild: [RoleGuard],
    children: [{ path: 'edit', component: EditAboutComponent }],
  },
  { path: '**', component: AccessDeniedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouteRoutingModule { }
