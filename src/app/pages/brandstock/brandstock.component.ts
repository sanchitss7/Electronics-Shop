import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brandstock',
  templateUrl: './brandstock.component.html',
  styleUrls: ['./brandstock.component.less']
})
export class BrandstockComponent implements OnInit {
  brands = [
    { id: 1, status:'In Stock', value: "Samsung" },
    { id: 2, status:'Sold', value: "Vivo" },
    { id: 3, status:'Sold', value: "Oppo" },
    { id: 4, status:'In Stock', value: "Oneplus" },
    { id: 5, status:'In Stock', value: "Motorola" },
    { id: 6, status:'In Stock', value: "MI" },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
