import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-realisations',
  templateUrl: './realisations.component.html',
  styleUrls: ['./realisations.component.scss']
})
export class RealisationsComponent implements OnInit {

  public bannerTitle: string = "Réalisations";
  public bannerBg: string = "assets/images/bg/histoire-bg.jpg";
  public bannerText: string = "Test de Réalisation";

  constructor(
    private setTitle: Title,
  ) { }

  ngOnInit(): void {
    this.setTitle.setTitle("Les réalisations - LIFILED");
  }

}
