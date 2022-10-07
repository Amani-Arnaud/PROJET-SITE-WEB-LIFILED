import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SITE_URL } from '../../shared/app-links';

@Component({
  selector: 'app-activity-connectivity',
  templateUrl: './activity-connectivity.component.html',
  styleUrls: ['./activity-connectivity.component.scss']
})
export class ActivityConnectivityComponent implements OnInit {

  public siteUrl: string = SITE_URL;
  public bannerTitle: string = "Connectivité";
  public bannerBg: string = "assets/images/bg/histoire-bg.jpg";
  public bannerText: string = "Decouvrez Nos activités de la connectivité à l'Afrique";

  constructor(
    private setTtitle: Title,
  ) { }

  ngOnInit(): void {
    this.setTtitle.setTitle("Activité de connectivité - LIFILED");
  }

}
