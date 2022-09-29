import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.scss']
})
export class NotFoundPageComponent implements OnInit {

  constructor(
    private pageTitle: Title
  ) { }

  ngOnInit(): void {
    this.pageTitle.setTitle("Erreur 404 | LIFILED");
  }

}
