import { Component, Input, OnInit } from '@angular/core';
import * as APP_URL from '../../../shared/app-links';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  public siteUrl: string = APP_URL.SITE_URL;
  @Input() titleBanner!: string;
  @Input() bgBanner!: string;
  @Input() textBanner!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
