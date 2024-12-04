import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {
  public chartOptions = {
    responsive: true,
    resizeDelay: 5,
    maintainAspectRatio: false,
    AspectRatio: false,
    
  };

  public chartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'];
  public lagend = false;
  
  chartData = [
    {
      data: [330, 600, 260, 700, 400, 300, 120, 230, 570],
      backgroundColor: [
        'transparent'
    ],
      
      label: 'Mobile',
      borderColor: ['#085ad2'],
      legend: {
        display: false,
      }
    },
    
    {
      data: [120, 455, 300, 340, 260, 570, 340, 230, 430],
      label: 'Electronics',
       backgroundColor: [
        'transparent'
       ],
       borderColor: '#fda820'
    },
    
  ];
  public chartType: any = 'line'; // Change to 'line', 'pie', etc. as needed
  public boxWidth: any = '30px'; // Change to 'line', 'pie', etc. as needed
  constructor() { }

  ngOnInit(): void {
  }

}
