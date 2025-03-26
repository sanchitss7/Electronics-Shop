import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MasterService } from 'src/app/services/master.service';
import { Router } from '@angular/router';
import { UserDetails, userDoc } from 'src/app/models/categoriesBean';
import * as $ from 'jquery';
import { AlertComponent } from 'src/app/common/alert/alert.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-create-update-users',
  templateUrl: './create-update-users.component.html',
  styleUrls: ['./create-update-users.component.less']
})
export class CreateUpdateUsersComponent implements OnInit {
  sectionTitle: any;

  userDetails: FormGroup;
  docDetails: FormGroup;
  submitted: boolean = false;
  id: any;
  editEnable = false;
  userDetailsBean: UserDetails = new UserDetails();
  userDoc: userDoc = new userDoc();
  step1: boolean = true;
  step2: boolean = false;
  options = [
    { value: '1', label: 'PAN Card' },
    { value: '2', label: 'Aadhar Card' }
  ];
  selectedFile: any;
  panInv: boolean | undefined;
  mobileInv: boolean | undefined;
  emailInv: boolean | undefined;

  constructor(private fb: FormBuilder, private masterService: MasterService, private route: Router, private dialog : MatDialog) {
    this.userDetails = this.fb.group({
      name: ["", [Validators.required]],
      email: ["", [Validators.required]],
      alternateEmail: [""],
      mobile: ["", [Validators.required]],
      alternateMobile: [""],
      p_address: ["", [Validators.required]],
      c_address: ["", [Validators.required]],
      pan: ["", [Validators.required]],
    })

    this.docDetails = this.fb.group({
      docType: ["", [Validators.required]],
      // docName: ["", [Validators.required]],
    })

    if (history.state.id != null || history.state.id != undefined) {
      this.id = history.state.id;
    }
  }

  ngOnInit(): void {
    this.sectionTitle = "User Details";
    if (this.id != null || this.id != undefined) {
      this.editEnable = true;
    }
  }

  onBackClick() {
    this.route.navigateByUrl('/Inventories')
  }
  valueCheck(comingFrom: any, event: any) {
    if (comingFrom == "name") {
      event.target.value = event.target.value.replace(/[^a-zA-Z ]+/ig, '');
    } else if (comingFrom == "pan") {
      event.target.value = event.target.value.replace(/[^a-zA-Z0-9]+/ig, '');
    } else if (comingFrom == "mobile") {
      event.target.value = event.target.value.replace(/[^0-9]+/ig, '');
    } else if (comingFrom == "email") {
      event.target.value = event.target.value.replace(/[^a-zA-Z0-9_@.]+/ig, '');
    } else if (comingFrom == "address") {
      event.target.value = event.target.value.replace(/[^a-zA-Z0-9_, .-\/()[]]+/ig, '');
    } else {

    }
  }

  valueCheckOnBlur(comingFrom: any) {
    if (comingFrom == "name") {
      var nm = this.userDetails.controls.pan.value.replace(/[^a-zA-Z0-9]+/ig, '');
      const reg = new RegExp('^[A-Za-z]{3}[p|P]{1}[a-zA-Z]{1}\\d{4}[A-Za-z]{1}$');
      if (reg.test(nm)) {
        this.panInv = false;
      } else {
        this.userDetails.controls.pan.setErrors({ 'incorrect': false });
        this.panInv = true;
      }
    }else if (comingFrom == "mobile") {
      var nm = this.userDetails.controls.mobile.value.replace(/[^0-9]+/ig, '');
      const reg = new RegExp('^[0][6-9]\\d{9}$|^[6-9]\\d{9}$');
      if (reg.test(nm)) {
        this.mobileInv = false;
      } else {
        this.userDetails.controls.mobile.setErrors({ 'incorrect': false });
        this.mobileInv = true;
      }
    }else if (comingFrom == "email") {
      var nm = this.userDetails.controls.email.value.replace(/[^a-zA-Z0-9_@.]+/ig, '');
      const reg = new RegExp('^([A-Za-z0-9]{1,}[_.]{0,1})+@([a-z0-9.-]{1,})+\\.[a-z]{2,4}$');
      if (reg.test(nm)) {
        this.emailInv = false;
      } else {
        this.userDetails.controls.email.setErrors({ 'incorrect': false });
        this.emailInv = true;
      }
    }
  }

  submit() {
    this.submitted = true;
    if (this.userDetails.invalid) {
      return;
    }
    this.userDetailsBean = this.userDetails.value;
    this.userDetailsBean.CreatedBy = this.masterService.loggedInUserName;
    this.masterService.addUserDetails(this.userDetailsBean).subscribe((res: any) => {
      console.log(res);
      if (res == '1') {
        this.step1 = false;
        this.step2 = true;
        this.submitted = false;
        this.sectionTitle = "Address Details";
        $('#step2').toggleClass('active');
      } else {
        this.dialog.open(AlertComponent, {
          data: {
            message: "Failed"
          }
        });
        return;
      }
    })
  }

  edit() {

  }

  submitStep2() {
    this.userDoc = this.docDetails.value;
    this.userDetailsBean.CreatedBy = this.masterService.loggedInUserName;
    this.masterService.addUserDocs(this.docDetails.value, this.selectedFile).subscribe((res: any) => {
      console.log(res);
    });
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }
}
