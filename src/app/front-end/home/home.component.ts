import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SITE_URL } from '../../shared/app-links';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public siteUrl: string = SITE_URL;

  constructor(
    private setTitle: Title,
  ) { }

  ngOnInit(): void {
    this.setTitle.setTitle("Accueil - LIFILED");
  }

}
