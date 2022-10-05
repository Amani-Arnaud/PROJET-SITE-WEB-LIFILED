import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './front-end/shared/footer/footer.component';
import { NavBarComponent } from './front-end/shared/nav-bar/nav-bar.component';
import { NotFoundPageComponent } from './shared/not-found-page/not-found-page.component';
import { HttpClientModule} from '@angular/common/http';
import { BannerComponent } from './front-end/shared/banner/banner.component';
@NgModule({
  declarations: [
    AppComponent,
    NotFoundPageComponent,
    NavBarComponent,
    FooterComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
