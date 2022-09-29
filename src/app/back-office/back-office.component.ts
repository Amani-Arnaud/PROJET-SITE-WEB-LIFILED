import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-back-office',
  templateUrl: './back-office.component.html',
  styleUrls: ['./back-office.component.scss']
})
export class BackOfficeComponent implements OnInit {

  constructor(
    private pageTitle: Title,
  ) { }

  ngOnInit(): void {
    this.pageTitle.setTitle("Back Office | LIFILED");
  }

}
