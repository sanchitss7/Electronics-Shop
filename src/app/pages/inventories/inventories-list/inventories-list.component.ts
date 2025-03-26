import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MasterService } from 'src/app/services/master.service';
import { Router } from '@angular/router';
import { Base64encodeService } from 'src/app/services/base64encode.service';

@Component({
  selector: 'app-inventories-list',
  templateUrl: './inventories-list.component.html',
  styleUrls: ['./inventories-list.component.less']
})
export class InventoriesListComponent implements OnInit {
  inventoriesList: any = [];
  allowedActions : any = [];
  constructor(private fb: FormBuilder, private masterService: MasterService, private route: Router,private base64encode: Base64encodeService) {
    this.allowedActions = sessionStorage.getItem('allowedPermission');
    this.allowedActions = JSON.parse(this.allowedActions);
    console.log("-----------------------allowedActions--------------",this.allowedActions)
  }

  ngOnInit(): void {
    this.inventoryList();
  }

  inventoryList() {
    this.masterService.viewInventories().subscribe((res: any) => {
      console.log(res);
      if (res != null) {
        this.inventoriesList = res;
      } else {

      }
    })
  }

  create() {
    this.route.navigateByUrl('Inventories/create');
  }

  edit(id: any) {
    this.route.navigateByUrl('Inventories/create', { state: { id: id } });
  }

  delete(id: any, username: any) {
    this.masterService.deleteInventories(this.base64encode.encodeBase64(id), this.base64encode.encodeBase64(username)).subscribe((res: any) => {
    })
  }

}

