import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {
  
  public bannerTitle: string = "Nos Activités";
  public bannerBg: string = "";
  public bannerText: string = "Découvrez nos activités fares";

  constructor(
    private setTitle: Title,
  ) { }

  ngOnInit(): void {
    this.setTitle.setTitle("Les Activités - LIFILED");
  }

}
