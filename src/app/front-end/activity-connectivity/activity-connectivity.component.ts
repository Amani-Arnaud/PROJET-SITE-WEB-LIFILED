import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-activity-connectivity',
  templateUrl: './activity-connectivity.component.html',
  styleUrls: ['./activity-connectivity.component.scss']
})
export class ActivityConnectivityComponent implements OnInit {

  public bannerTitle: string = "Connectivité";
  public bannerBg: string = "";
  public bannerText: string = "Decouvrez Nos activités de la connectivité à l'Afrique";

  constructor(
    private setTtitle: Title,
  ) { }

  ngOnInit(): void {
    this.setTtitle.setTitle("Activité de connectivité - LIFILED");
  }

}
