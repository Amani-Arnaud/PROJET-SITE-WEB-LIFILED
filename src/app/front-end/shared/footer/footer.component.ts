import { Component, OnInit } from '@angular/core';
import * as APP_URL from '../../../shared/app-links';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public siteUrl: string = APP_URL.SITE_URL;

  constructor() { }

  ngOnInit(): void {
  }

}
