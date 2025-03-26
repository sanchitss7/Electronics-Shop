import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthGuard } from './services/auth-guard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'ElectronicShop';
  
    showHeader: boolean = true;
  
    constructor(private router: Router, private auth : AuthGuard) {}
  
    ngOnInit() {
      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          this.showHeader = event.url !== '/login' && event.url !== '/';
        }
      });
    }
  }