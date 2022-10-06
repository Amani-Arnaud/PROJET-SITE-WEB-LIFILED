import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './front-end/shared/footer/footer.component';
import { NavBarComponent } from './front-end/shared/nav-bar/nav-bar.component';
import { HttpClientModule} from '@angular/common/http';
import { DatePipe } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule

  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
