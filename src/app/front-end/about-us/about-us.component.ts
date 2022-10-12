import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  public bannerTitle: string = "Apropos ";
  public bannerBg: string = "assets/images/show/Afrique_connecté.PNG";
  public bannerText: string = "Decouvrez Lifiled ses actions et son histoire";

  constructor(
    private setTitle: Title,
  ) { }

  ngOnInit(): void {
    this.setTitle.setTitle("A Propos de LIFILED");
  }

}
