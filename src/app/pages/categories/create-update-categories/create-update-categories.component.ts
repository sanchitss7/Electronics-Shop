import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MasterService } from 'src/app/services/master.service';
import { Categories } from 'src/app/models/categories.model';
import { Router } from '@angular/router';
import { CategoriesBean } from 'src/app/models/categoriesBean';
import { Base64encodeService } from 'src/app/services/base64encode.service';

@Component({
  selector: 'app-create-update-categories',
  templateUrl: './create-update-categories.component.html',
  styleUrls: ['./create-update-categories.component.less']
})
export class CreateUpdateCategoriesComponent implements OnInit {

  createCategories: FormGroup;
  submitted: boolean = false;
  id: any;
  editEnable = false;
  categoryReq: CategoriesBean = new CategoriesBean();
  isCategorySelected: any = false;
  onChange = (value: any) => { };
  checked: boolean = false;
  categoriesList: any = [];
  constructor(private fb: FormBuilder, private masterService: MasterService, private route: Router, private base64encode: Base64encodeService) {
    this.createCategories = this.fb.group({
      categoryName: ["", [Validators.required]],
      description: ["", [Validators.required]],
      // level: ["", [Validators.required]],
      parentLevel: ["", [Validators.required]]
    })

    if (history.state.id != null || history.state.id != undefined) {
      this.id = history.state.id;
    }
  }

  ngOnInit(): void {
    if (this.id != null || this.id != undefined) {
      this.editEnable = true;
      this.categoryList();
    }
  }

  categoryList() {
    this.masterService.viewCategories(this.base64encode.encodeBase64(this.id)).subscribe((res: any) => {
      console.log(res);
      if (res != null) {
        this.categoryReq = res[0];
        if(this.categoryReq.parentLevel != 0){
          this.categorySelected();
        }
        this.createCategories.patchValue(res[0]);
      } else {

      }
    })
  }

  onBackClick() {
    this.route.navigateByUrl('/Category')
  }

  onSubmit() {
    this.submitted = true;
    if (this.createCategories.invalid) {
      return;
    }
    this.categoryReq = this.createCategories.value;
    this.categoryReq.CreatedBy = 'samrutti@gmail.com'
    if (this.isCategorySelected == false) {
      this.categoryReq.Level = 1;
      this.categoryReq.parentLevel = 0;
    } else if (this.isCategorySelected == true) {
      this.categoryReq.Level = 1;
      this.categoryReq.parentLevel = +this.createCategories.controls.parentLevel.value;
    }
    this.masterService.addCategories(this.categoryReq).subscribe((res: any) => {
      if (res == '1') {
        this.route.navigateByUrl('/Category');
      } else {
        console.log("failure -1 ----- ----------------------")
      }
    })
  }

  onEditSubmit() {
    this.submitted = true;
    if (this.createCategories.invalid) {
      return;
    }

    this.categoryReq.CategoryName = this.createCategories.value.categoryName;
    this.categoryReq.Description = this.createCategories.value.description;
    this.categoryReq.Level = this.createCategories.value.level;
    this.categoryReq.parentLevel = this.createCategories.value.parentLevel;
    this.masterService.editCategories(this.categoryReq).subscribe((res: any) => {
      console.log(res);
      if (res == '1') {
        this.route.navigateByUrl('/Category');
      } else {
        console.log("failure -1 ---------------------------")
      }
    })
  }

  categorySelected() {
    this.checked = !this.checked;
    this.onChange(this.checked);
    if (this.checked) {
      this.isCategorySelected = true;
      this.callCategoryList();
    } else {
      this.isCategorySelected = false;
    }
  }

  callCategoryList() {
    this.masterService.viewCategories().subscribe((res: any) => {
      console.log(res);
      if (res != null) {
        console.log("---------before----------", res);
        res.forEach((element: { level: number; }) => {
          if (element.level == 1) {
            this.categoriesList.push(element);
          }
        });
        console.log("-------------------", this.categoriesList);
        // this.categoriesList = res;
      } else {

      }
    })
  }
}
