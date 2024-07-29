import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule  } from '@angular/forms';
import { MasterService } from 'src/app/services/master.service';
import { Categories } from '../../models/categories.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  loginDetails: FormGroup;
  submitted : any = false;
  constructor(private fb: FormBuilder, private masterService : MasterService) { 
    this.loginDetails = this.fb.group({
      username: ["", [Validators.required]],
      password: ["", [Validators.required]],
    });
  }

  ngOnInit(): void {
    console.log("---------------------samrutti____________________");
  }

  onLogin(){
    this.submitted = true;
    if(this.loginDetails.invalid){
      return;
    }
    
    this.masterService.login(this.loginDetails.value.username,this.loginDetails.value.password).subscribe((response: any) => {
      console.log(response);
    });
  }
}
