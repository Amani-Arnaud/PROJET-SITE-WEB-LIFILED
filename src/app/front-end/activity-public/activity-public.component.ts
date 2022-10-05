import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-activity-public',
  templateUrl: './activity-public.component.html',
  styleUrls: ['./activity-public.component.scss']
})
export class ActivityPublicComponent implements OnInit {

  public bannerTitle: string = "Eclairages Public";
  public bannerBg: string = "assets/images/bg/histoire-bg.jpg";
  public bannerText: string = "Decouvrez Nos activités d'éclairage public";

  constructor(
    private setTitle: Title,
  ) { }

  ngOnInit(): void {
    this.setTitle.setTitle("éclairages public - LIFILED");
  }

}
