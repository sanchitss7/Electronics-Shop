import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MasterService } from 'src/app/services/master.service';
import { Categories } from 'src/app/models/categories.model';
import { Router } from '@angular/router';
import { state } from '@angular/animations';
import { Base64encodeService } from 'src/app/services/base64encode.service';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.less']
})
export class CategoriesListComponent implements OnInit {
  categoriesList: any = [];
  allowedActions : any = {};
  constructor(private fb: FormBuilder, private masterService: MasterService, private route: Router,private base64encode: Base64encodeService) {
    this.allowedActions = sessionStorage.getItem('allowedPermission');
    this.allowedActions = JSON.parse(this.allowedActions);
    console.log("-----------------------allowedActions--------------",this.allowedActions)
  }

  ngOnInit(): void {
    this.categoryList();
  }

  categoryList() {
    this.masterService.viewCategories().subscribe((res: any) => {
      console.log(res);
      if (res != null) {
        this.categoriesList = res;
      } else {

      }
    })
  }

  create() {
    this.route.navigateByUrl('Category/create');
  }

  editCategory(id : any) {
    this.route.navigateByUrl('Category/create',{state : { id: id }});
  }

  deleteCategory(id : any, username : any) {
    this.masterService.deleteCategories(this.base64encode.encodeBase64(id),this.base64encode.encodeBase64(username)).subscribe((res: any)=>{

    })
  }

}

