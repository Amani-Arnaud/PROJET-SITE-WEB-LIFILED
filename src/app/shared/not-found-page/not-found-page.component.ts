import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SITE_URL } from '../../shared/app-links';

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.scss']
})
export class NotFoundPageComponent implements OnInit {

  public siteUrl: string = SITE_URL;
  public bannerTitle: string = "Aucun Page ";
  public bannerBg: string = "assets/images/bg/histoire-bg.jpg";
  public bannerText: string = "Veuillez retouner à la page d'accueil";

  constructor(
    private pageTitle: Title
  ) { }

  ngOnInit(): void {
    this.pageTitle.setTitle("Erreur 404 | LIFILED");
  }

}
