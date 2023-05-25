import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RouteModule } from './route/route.module';
import { ComponentsReusableModule } from './componentsReusable/components-reusable.module';
import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';
import { OffersModule } from './pages/offers/offers.module';
import { RouterModule } from '@angular/router';
import { TokenInterceptor } from './services/tokenInterceptor/token.interceptor';
// import { DirectivesModule } from './directives/directives.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouteModule,
    RouterModule,
    // RouteRoutingModule,
    ComponentsReusableModule,
    ComponentsModule,
    PagesModule,
    OffersModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
