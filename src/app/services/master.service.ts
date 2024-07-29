import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Categories } from '../models/categories.model';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  apiURL: string | undefined;
  webapiApplicationURL = environment.webapibaseURL + 'Users/';

  constructor(private http: HttpClient) { }

  login(email: any, password : any){
    this.apiURL = this.webapiApplicationURL + 'Login?email=' + email + '&password=' + password;
    return this.http.get(this.apiURL);
  }

  viewAllOrders(){
    this.apiURL = this.webapiApplicationURL + 'ViewAllOrders';
    return this.http.get(this.apiURL);
  }

  addInventories(category: Categories): Observable<Boolean> {
    this.apiURL = this.webapiApplicationURL + 'AddInventories';
    return this.http.post<Boolean>(this.apiURL,category);
  }

  editInventories(category: Categories): Observable<Boolean> {
    this.apiURL = this.webapiApplicationURL + 'EditInventories';
    return this.http.post<Boolean>(this.apiURL,category);
  }

  deleteInventories(category: Categories): Observable<Boolean> {
    this.apiURL = this.webapiApplicationURL + 'DeleteInventories';
    return this.http.post<Boolean>(this.apiURL,category);
  }

  viewInventories(){
    this.apiURL = this.webapiApplicationURL + 'ViewInventories';
    return this.http.get(this.apiURL);
  }
}
