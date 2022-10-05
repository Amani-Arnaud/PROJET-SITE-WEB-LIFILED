import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'LIFILED';

  public urlPage!: String;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.router.events.pipe(filter((event: any) => event instanceof NavigationEnd))
        .subscribe((event: any) => {
          this.urlPage = event.urlAfterRedirects;
        });
  }

}
