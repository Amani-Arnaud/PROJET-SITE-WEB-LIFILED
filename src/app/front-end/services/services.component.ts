import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  public bannerTitle: string = "Service";
  public bannerBg: string = "assets/images/bg/histoire-bg.jpg";
  public bannerText: string = "Nos services";

  constructor(
    private setTitle: Title,
  ) { }

  ngOnInit(): void {
    this.setTitle.setTitle("Nos Services - LIFILED");
  }

}
