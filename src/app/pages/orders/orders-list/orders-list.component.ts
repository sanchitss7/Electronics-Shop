import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MasterService } from 'src/app/services/master.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.less']
})
export class OrdersListComponent implements OnInit {
  ordersList: any = [];
  allowedActions : any = {};
  constructor(private fb: FormBuilder, private masterService: MasterService, private route: Router) {
    this.allowedActions = sessionStorage.getItem('allowedPermission');
    this.allowedActions = JSON.parse(this.allowedActions);
    console.log("-----------------------allowedActions--------------",this.allowedActions)
  }

  ngOnInit(): void {
    this.orderList();
  }

  orderList() {
    this.masterService.viewAllOrders().subscribe((res: any) => {
      console.log(res);
      if (res != null) {
        this.ordersList = res;
      } else {

      }
    })
  }

  create() {
    this.route.navigateByUrl('Inventories/create');
  }

  edit(id : any) {
    this.route.navigateByUrl('Inventories/create',{state : { id: id }});
  }

  delete(id : any, username : any) {
    debugger;
    this.masterService.deleteInventories(id,username).subscribe((res: any)=>{
    })
  }

}
