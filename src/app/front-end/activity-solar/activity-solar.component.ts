import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SITE_URL } from '../../shared/app-links';

@Component({
  selector: 'app-activity-solar',
  templateUrl: './activity-solar.component.html',
  styleUrls: ['./activity-solar.component.scss']
})
export class ActivitySolarComponent implements OnInit {
  public siteUrl: string = SITE_URL;

  public bannerTitle: string = "Eclairage Solaire";
  public bannerBg: string = "assets/images/bg/histoire-bg.jpg";
  public bannerText: string = "Decouvrez Nos activités d'éclairage Solaire";

  constructor(
    private setTitle: Title,
  ) { }

  ngOnInit(): void {
    this.setTitle.setTitle("éclairage solaire - LIFILED");
  }

}
