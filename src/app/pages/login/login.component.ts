import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MasterService } from 'src/app/services/master.service';
import { Router } from '@angular/router';
import { Base64encodeService } from 'src/app/services/base64encode.service';
import { AlertComponent } from 'src/app/common/alert/alert.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  loginDetails: FormGroup;
  submitted: any = false;
  emailInv: boolean = false;
  constructor(private fb: FormBuilder, private masterService: MasterService, private route: Router,
    private base64encode: Base64encodeService, private dialog: MatDialog) {
    this.loginDetails = this.fb.group({
      username: ["", [Validators.required]],
      password: ["", [Validators.required]],
    });
  }

  ngOnInit(): void {
    console.log("---------------------samrutti____________________");
  }

  usernameCheck(){
    var nm =this.loginDetails.controls.username.value.replace(/[^a-zA-Z0-9_@.]+/ig, '');
    const reg = new RegExp('^([A-Za-z0-9]{1,}[_.]{0,1})+@([a-z0-9.-]{1,})+\\.[a-z]{2,4}$');
    if (reg.test(nm)) {
      this.emailInv = false;
    } else {
      this.loginDetails.controls.username.setErrors({ 'incorrect': false });
      this.emailInv = true;
    }
  }

  usernamekeyup(event: any) {
    event.target.value = event.target.value.replace(/[^a-zA-Z0-9_@.]+/ig, '');
  }

  onLogin() {
    this.submitted = true;
    if (this.loginDetails.invalid) {
      return;
    }

    this.masterService.login(this.base64encode.encodeBase64(this.loginDetails.value.username), this.base64encode.encodeBase64(this.loginDetails.value.password)).subscribe((response: any) => {
      if (response.message == "Success") {
        sessionStorage.setItem('LoggedInStatus', "true");
        sessionStorage.setItem('userId', response.userId);
        sessionStorage.setItem('menuList',JSON.stringify(response.menu));
        this.masterService.loggedInUserName = response.userName;
        if (response.menu.length > 0) {
          this.route.navigate([response.menu[0].name]); // Redirect to the first allowed menu
        } else {
          this.route.navigate(['/not-allowed']); // Handle no allowed menus case
        }
      } else {
        this.dialog.open(AlertComponent, {
          data: {
            message: "Login Failed"
          }
        });
        return;
      }
    }, error => {
      this.dialog.open(AlertComponent, {
        data: {
          message: "Login Failed"
        }
      });
      return;
    });
  }
}
