import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { BackOfficeComponent } from './back-office.component';

const routes: Routes = [
  { path: '', component: BackOfficeComponent },
  { path: 'login', component: AuthComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackOfficeRoutingModule { }
