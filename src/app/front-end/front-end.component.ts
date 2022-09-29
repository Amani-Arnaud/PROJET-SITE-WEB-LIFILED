import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-front-end',
  templateUrl: './front-end.component.html',
  styleUrls: ['./front-end.component.scss']
})
export class FrontEndComponent implements OnInit {

  constructor(
    private pageTitle: Title
  ) { }

  ngOnInit(): void {
    this.pageTitle.setTitle("Accueil | LIFILED");
  }

}
