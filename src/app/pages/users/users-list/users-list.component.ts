import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MasterService } from 'src/app/services/master.service';
import { Categories } from 'src/app/models/categories.model';
import { Router } from '@angular/router';
import { state } from '@angular/animations';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.less']
})
export class UsersListComponent implements OnInit {
  usersList: any = [];
  allowedActions : any;
  constructor(private fb: FormBuilder, private masterService: MasterService, private route: Router) {
    this.allowedActions = sessionStorage.getItem('allowedPermission');
    this.allowedActions = JSON.parse(this.allowedActions);
    console.log("-----------------------allowedActions--------------",this.allowedActions)
  }

  ngOnInit(): void {
    this.categoryList();
  }

  categoryList() {
    this.masterService.viewUsers().subscribe((res: any) => {
      console.log(res);
      if (res != null) {
        this.usersList = res;
      } else {

      }
    })
  }

  create() {
    this.route.navigateByUrl('Users/create');
  }

  edit(id : any) {
    this.route.navigateByUrl('Users/create',{state : { id: id }});
  }

  delete(id : any, username : any) {
    this.masterService.deleteCategories(id,username).subscribe((res: any)=>{
    })
  }
}
