import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontEndRoutingModule } from './front-end-routing.module';
import { FrontEndComponent } from './front-end.component';
import { ActivitiesComponent } from './activities/activities.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { RealisationsComponent } from './realisations/realisations.component';
import { ActivitySolarComponent } from './activity-solar/activity-solar.component';
import { ActivityPublicComponent } from './activity-public/activity-public.component';
import { ActivityConnectivityComponent } from './activity-connectivity/activity-connectivity.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { BannerComponent } from './shared/banner/banner.component';

@NgModule({
  declarations: [
    FrontEndComponent,
    ActivitiesComponent,
    HomeComponent,
    AboutUsComponent,
    ContactComponent,
    ServicesComponent,
    RealisationsComponent,
    ActivitySolarComponent,
    ActivityPublicComponent,
    ActivityConnectivityComponent,
    BannerComponent
  ],
  imports: [
    CommonModule,
    FrontEndRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class FrontEndModule { }
