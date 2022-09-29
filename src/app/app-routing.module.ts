import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './shared/not-found-page/not-found-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'lifiled-admin', loadChildren: () => import('./back-office/back-office.module').then(m => m.BackOfficeModule) }, 
  { path: 'site', loadChildren: () => import('./front-end/front-end.module').then(m => m.FrontEndModule) },

  { path: '**', component:NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
