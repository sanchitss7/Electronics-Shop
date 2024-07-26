import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'ElectronicShop';
  
    showHeader: boolean = true;
  
    constructor(private router: Router) {}
  
    ngOnInit() {
      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          this.showHeader = event.url !== '/login' && event.url !== '/';
        }
      });
    }
  }