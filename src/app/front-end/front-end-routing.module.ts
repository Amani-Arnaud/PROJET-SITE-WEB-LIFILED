import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from '../shared/not-found-page/not-found-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ActivitiesComponent } from './activities/activities.component';
import { ActivityConnectivityComponent } from './activity-connectivity/activity-connectivity.component';
import { ActivityPublicComponent } from './activity-public/activity-public.component';
import { ActivitySolarComponent } from './activity-solar/activity-solar.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { RealisationsComponent } from './realisations/realisations.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'accueil', component:HomeComponent},
  { path: 'activities', component:ActivitiesComponent},
  { path: 'activities/solaires', component:ActivitySolarComponent},
  { path: 'activities/public', component:ActivityPublicComponent},
  { path: 'activities/connectivité', component:ActivityConnectivityComponent},
  { path: 'services', component:ServicesComponent},
  { path: 'realisations', component:RealisationsComponent},
  { path: 'a-propos', component:AboutUsComponent},
  { path: 'contact', component:ContactComponent},

  { path: '**', component:NotFoundPageComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontEndRoutingModule { }
