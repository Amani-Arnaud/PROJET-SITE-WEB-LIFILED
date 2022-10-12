import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AdminServiceService } from '../services/admin-service.service';
import * as APP_URL from '../shared/app-links';
import { SITE_URL } from '../shared/app-links';

@Component({
  selector: 'app-back-office',
  templateUrl: './back-office.component.html',
  styleUrls: ['./back-office.component.scss']
})
export class BackOfficeComponent implements OnInit {

  public siteUrl: string = SITE_URL;
  public messages:any;
  public indexPage:number = 1;
  public titleMessages!: string;
  public numberUnreadedMessage!: number;

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
      window.location.href = this.siteUrl + 'lifiled-admin/login';
      // this.router.navigateByUrl(this.siteUrl + 'lifiled-admin/login');
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
    this.titleMessages = "Tous les Messsages";
    this.getUnreadedMessagesNumbers();
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
    this.titleMessages = "Nouveaux Messsages";
    this.getUnreadedMessagesNumbers();
  }

  getUnreadedMessagesNumbers(){
    this.adminService.searchMessage("status", "0").subscribe((result)=>{
      this.numberUnreadedMessage = result.length;
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
    this.titleMessages = "Messsages lus";
    this.getUnreadedMessagesNumbers();
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
    this.titleMessages = "Messsages Favoris";
    this.getUnreadedMessagesNumbers();
  }

  logOut(){
    localStorage.removeItem("adminIsLogin")
    window.location.href = APP_URL.SITE_URL + "lifiled-admin/login";
  }

  readMessage(messageId: number){
    let data = {
      "status" : 1
    }
    if (this.adminService.readMessage(messageId, data)) {
      // message lu
      console.log("test read message passed");
    this.getUnreadedMessagesNumbers();
    } else {
      // message  non lu
      console.log("test read message failed");
    }
  }

  addToWhishList(messageId: number){
    let data = {
      "whish" : 1
    }
    if (this.adminService.addToWhishList(messageId, data)) {
      // message lu
      console.log("test whish message passed");
    } else {
      // message  non lu
      console.log("test whish message failed");
    }
  }

   tableColor(status: number){
     switch (status) {
       case 0:
         return "table-warning";
         break;

         case 1:
          return "table-info";
          break;
     
       default:
        return "";
         break;
     }
   }

}
