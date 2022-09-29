import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesComponent } from './activities/activities.component';
import { FrontEndComponent } from './front-end.component';

const routes: Routes = [
  { path: '', component: FrontEndComponent },
  { path: 'activities', component:ActivitiesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontEndRoutingModule { }
