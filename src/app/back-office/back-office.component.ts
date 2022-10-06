import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AdminServiceService } from '../services/admin-service.service';
import * as APP_URL from '../shared/app-links';
@Component({
  selector: 'app-back-office',
  templateUrl: './back-office.component.html',
  styleUrls: ['./back-office.component.scss']
})
export class BackOfficeComponent implements OnInit {

  public messages:any;
  public indexPage:number = 1;

  public allMessagesPages: string = "";
  public unReadedMessagesPages: string = "active rounded-pill bg-primary ";
  public readedMessagesPages: string = "";
  public whishMessagesPages: string = "";

  constructor(
    private pageTitle: Title,
    private adminService: AdminServiceService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.pageTitle.setTitle("Back Office | LIFILED");
    if(!this.adminService.isAuth()){
      this.router.navigateByUrl('/lifiled-admin/login');
    }
    this.getAllMessages();
  }

  getAllMessages(){
    this.allMessagesPages = "active rounded-pill bg-primary";
    this.unReadedMessagesPages = "";
    this.readedMessagesPages = "";
    this.whishMessagesPages = "";
    this.adminService.getMessages().subscribe((result: any)=>{
      this.indexPage;
      this.messages = result;
    });
  }

  getUnreadedMessages(){
    this.allMessagesPages = "";
    this.unReadedMessagesPages = "active rounded-pill bg-primary";
    this.readedMessagesPages = "";
    this.whishMessagesPages = "";
    this.adminService.searchMessage("status", "0").subscribe((result)=>{
      this.indexPage;
      this.messages = result;
    });
  }

  getReadedMessages(){
    this.allMessagesPages = "";
    this.unReadedMessagesPages = "";
    this.readedMessagesPages = "active rounded-pill bg-primary";
    this.whishMessagesPages = "";
    this.adminService.searchMessage("status", "1").subscribe((result)=>{
      this.indexPage;
      this.messages = result;
    });
  }

  getWhishMessages(){
    this.allMessagesPages = "";
    this.unReadedMessagesPages = "";
    this.readedMessagesPages = "";
    this.whishMessagesPages = "active rounded-pill bg-primary";
    this.adminService.searchMessage("whish", "1").subscribe((result)=>{
      this.indexPage;
      this.messages = result;
    });
  }

  logOut(){
    localStorage.removeItem("adminIsLogin")
    window.location.href = APP_URL.SITE_URL + "lifiled-admin/login";
  }

}
