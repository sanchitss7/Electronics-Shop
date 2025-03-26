import { Component, OnInit } from '@angular/core';
import { MasterService } from 'src/app/services/master.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {
  menuList = [];
  customeremiremider: any = [];
  boxData: any = {};
  earningData: any = {};
  bestproduct: any = [];
  constructor(private masterService: MasterService) {

  }

  ngOnInit(): void {
    this.getUpcomingEMIs();
    this.getBoxesData();
    this.getTopSellingProducts();
  }

  getBoxesData() {
    this.masterService.GetBoxesData().subscribe((res: any) => {
      if (res.hasOwnProperty('happyCustomers')) {
        delete res['happyCustomers'];
      }

      for (const key in res) {
        if (res.hasOwnProperty(key)) {
          const capitalizedKey = key.replace(/([A-Z])/g, " $1").replace(/^./, str => str.toUpperCase());
          if (key.toLowerCase().includes("earning")) {
            this.earningData[capitalizedKey] = res[key];
          } else {
            this.boxData[capitalizedKey] = res[key];
          }
        }
      }
      
    });
  }

  getUpcomingEMIs() {
    this.masterService.GetUpcomingEMIs().subscribe((res: any) => {
      this.customeremiremider = res;
    });
  }

  getTopSellingProducts() {
    this.masterService.GetTopSellingProducts().subscribe((res: any) => {
      this.bestproduct = res;
    });
  }

  bestoffer: any = [
    {
      name: 'bestoffer',
      image: 'https://via.placeholder.com/150',
      dtstart: "12/12/2024",
      dtend: "31/12/2024",
      description: 'This is the best offer ever!'
    }, {
      name: 'bestoffer',
      image: 'https://via.placeholder.com/150',
      dtstart: "12/12/2024",
      dtend: "31/12/2024",
      description: 'This is the best offer ever!'
    }, {
      name: 'bestoffer',
      image: 'https://via.placeholder.com/150',
      dtstart: "12/12/2024",
      dtend: "31/12/2024",
      description: 'This is the best offer ever!'
    }, {
      name: 'bestoffer',
      image: 'https://via.placeholder.com/150',
      dtstart: "12/12/2024",
      dtend: "31/12/2024",
      description: 'This is the best offer ever!'
    }, {
      name: 'bestoffer',
      image: 'https://via.placeholder.com/150',
      dtstart: "12/12/2024",
      dtend: "31/12/2024",
      description: 'This is the best offer ever!'
    }, {
      name: 'bestoffer',
      image: 'https://via.placeholder.com/150',
      dtstart: "12/12/2024",
      dtend: "31/12/2024",
      description: 'This is the best offer ever!'
    }, {
      name: 'bestoffer',
      image: 'https://via.placeholder.com/150',
      dtstart: "12/12/2024",
      dtend: "31/12/2024",
      description: 'This is the best offer ever!'
    }, {
      name: 'bestoffer',
      image: 'https://via.placeholder.com/150',
      dtstart: "12/12/2024",
      dtend: "31/12/2024",
      description: 'This is the best offer ever!'
    }, {
      name: 'bestoffer',
      image: 'https://via.placeholder.com/150',
      dtstart: "12/12/2024",
      dtend: "31/12/2024",
      description: 'This is the best offer ever!'
    }, {
      name: 'bestoffer',
      image: 'https://via.placeholder.com/150',
      dtstart: "12/12/2024",
      dtend: "31/12/2024",
      description: 'This is the best offer ever!'
    }
  ];

}
