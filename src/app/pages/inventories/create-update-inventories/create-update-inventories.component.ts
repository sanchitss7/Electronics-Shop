import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MasterService } from 'src/app/services/master.service';
import { Categories } from 'src/app/models/categories.model';
import { Router } from '@angular/router';
import { InventoriesBean } from 'src/app/models/categoriesBean';
import { Base64encodeService } from 'src/app/services/base64encode.service';

@Component({
  selector: 'app-create-update-inventories',
  templateUrl: './create-update-inventories.component.html',
  styleUrls: ['./create-update-inventories.component.less']
})
export class CreateUpdateInventoriesComponent implements OnInit {

  createInventories: FormGroup;
  submitted: boolean = false;
  id: any;
  editEnable = false;
  inventoriesReq: InventoriesBean = new InventoriesBean();
  categoriesList: any;

  constructor(private fb: FormBuilder, private masterService: MasterService, private route: Router,private base64encode: Base64encodeService) {
    this.createInventories = this.fb.group({
      categoryName: ["", [Validators.required]],
      productName: ["", [Validators.required]],
      description: ["", [Validators.required]],
      price: ["", [Validators.required]],
      quantity: ["", [Validators.required]],
      sku: ["", [Validators.required]]
    })

    if (history.state.id != null || history.state.id != undefined) {
      this.id = history.state.id;
    }
  }

  ngOnInit(): void {

    if (this.id != null || this.id != undefined) {
      this.editEnable = true;
      this.inventoryList();
    }
  }

  callCategoryList() {
    this.masterService.viewCategories().subscribe((res: any) => {
      console.log(res);
      if (res != null) {
        this.categoriesList = res;
        console.log("-------------------", this.categoriesList);
      } else {

      }
    })
  }

  inventoryList() {
    this.masterService.viewInventories(this.base64encode.encodeBase64(this.id)).subscribe((res: any) => {
      console.log(res);
      if (res != null) {
        this.inventoriesReq = res[0];
        this.createInventories.patchValue(res[0]);
      } else {

      }
    })
  }

  onBackClick() {
    this.route.navigateByUrl('/Inventories')
  }

  onSubmit() {
    this.submitted = true;
    if (this.createInventories.invalid) {
      return;
    }
    this.inventoriesReq = this.createInventories.value;
    this.inventoriesReq.CreatedBy = 'samrutti@gmail.com'
    console.log(this.inventoriesReq);
    this.masterService.addInventories(this.inventoriesReq).subscribe((res: any) => {
      console.log(res);
      if (res == '1') {
        this.route.navigateByUrl('/Inventories');
      } else {
        console.log("failure -1 ---------------------------")
      }
    })
  }

  onEditSubmit() {
    this.submitted = true;
    if (this.createInventories.invalid) {
      return;
    }
    
    this.inventoriesReq.categoryName = this.createInventories.value.categoryName;
    this.inventoriesReq.productName = this.createInventories.value.productName;
    this.inventoriesReq.description = this.createInventories.value.description;
    this.inventoriesReq.price = this.createInventories.value.price;
    this.inventoriesReq.quantity = this.createInventories.value.quantity;
    this.inventoriesReq.sku = this.createInventories.value.sku;
    this.masterService.editInventories(this.inventoriesReq).subscribe((res: any) => {
      console.log(res);
      if (res == '1') {
        this.route.navigateByUrl('/Inventories');
      } else {
        console.log("failure -1 ---------------------------")
      }
    })
  }
}
