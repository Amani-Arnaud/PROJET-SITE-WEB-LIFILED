import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  @Input() titleBanner!: string;
  @Input() bgBanner!: string;
  @Input() textBanner!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
