import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { BackOfficeRoutingModule } from './back-office-routing.module';
import { BackOfficeComponent } from './back-office.component';
import { AuthComponent } from './auth/auth.component';


@NgModule({
  declarations: [
    BackOfficeComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    BackOfficeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class BackOfficeModule { }
