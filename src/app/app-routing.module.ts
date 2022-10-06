import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', redirectTo: '/site', pathMatch: 'full'},
  { path: 'lifiled-admin', loadChildren: () => import('./back-office/back-office.module').then(m => m.BackOfficeModule) }, 
  { path: '', loadChildren: () => import('./front-end/front-end.module').then(m => m.FrontEndModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
