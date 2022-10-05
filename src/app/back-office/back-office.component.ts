import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-back-office',
  templateUrl: './back-office.component.html',
  styleUrls: ['./back-office.component.scss']
})
export class BackOfficeComponent implements OnInit {

  public allMessagesPages: string = "";
  public unReadedMessagesPages: string = "active rounded-pill bg-primary ";
  public readedMessagesPages: string = "";
  public whishMessagesPages: string = "";

  constructor(
    private pageTitle: Title,
  ) { }

  ngOnInit(): void {
    this.pageTitle.setTitle("Back Office | LIFILED");
  }

  getAllMessages(){
    this.allMessagesPages = "active rounded-pill bg-primary";
    this.unReadedMessagesPages = "";
    this.readedMessagesPages = "";
    this.whishMessagesPages = "";
  }

  getUnreadedMessages(){
    this.allMessagesPages = "";
    this.unReadedMessagesPages = "active rounded-pill bg-primary";
    this.readedMessagesPages = "";
    this.whishMessagesPages = "";
  }

  getReadedMessages(){
    this.allMessagesPages = "";
    this.unReadedMessagesPages = "";
    this.readedMessagesPages = "active rounded-pill bg-primary";
    this.whishMessagesPages = "";
  }

  getWhishMessages(){
    this.allMessagesPages = "";
    this.unReadedMessagesPages = "";
    this.readedMessagesPages = "";
    this.whishMessagesPages = "active rounded-pill bg-primary";
  }

}
