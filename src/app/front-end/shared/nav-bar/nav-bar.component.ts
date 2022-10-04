import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  public activeHomePage:string =  "active";
  public activeActivityPage:string =  "";
  public activeServicePage:string =  "";
  public activeRealisationPage:string =  "";
  public activeAboutPage:string =  "";
  public activeContactPage:string =  "";

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.router.events.pipe(filter((event: any) => event instanceof NavigationEnd))
        .subscribe((event: any) => {
            switch (event.urlAfterRedirects) {
              case "/accueil":
                this.activeHomePage =  "active";
                this.activeActivityPage =  "";
                this.activeServicePage =  "";
                this.activeRealisationPage =  "";
                this.activeAboutPage =  "";
                this.activeContactPage =  "";
                break;
          
              case "/activities":
                this.activeHomePage =  "";
                this.activeActivityPage =  "active";
                this.activeServicePage =  "";
                this.activeRealisationPage =  "";
                this.activeAboutPage =  "";
                this.activeContactPage =  "";
                break;

              case "/services":
                this.activeHomePage =  "";
                this.activeActivityPage =  "";
                this.activeServicePage =  "active";
                this.activeRealisationPage =  "";
                this.activeAboutPage =  "";
                this.activeContactPage =  "";
                break;

              case "/realisations":
                this.activeHomePage =  "";
                this.activeActivityPage =  "";
                this.activeServicePage =  "";
                this.activeRealisationPage =  "active";
                this.activeAboutPage =  "";
                this.activeContactPage =  "";
                break;

              case "/a-propos":
                this.activeHomePage =  "";
                this.activeActivityPage =  "";
                this.activeServicePage =  "";
                this.activeRealisationPage =  "";
                this.activeAboutPage =  "active";
                this.activeContactPage =  "";
                break;

              case "/contact":
                this.activeHomePage =  "";
                this.activeActivityPage =  "";
                this.activeServicePage =  "";
                this.activeRealisationPage =  "";
                this.activeAboutPage =  "";
                this.activeContactPage =  "active";
                break;

              default:
                this.activeHomePage =  "";
                this.activeActivityPage =  "active";
                this.activeServicePage =  "";
                this.activeRealisationPage =  "";
                this.activeAboutPage =  "";
                this.activeContactPage =  "";
                break;
            }
        });
  }

}
