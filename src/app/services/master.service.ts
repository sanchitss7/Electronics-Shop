import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { CategoriesBean } from '../models/categoriesBean';
import { Categories } from '../models/categories.model';

@Injectable({
  providedIn: 'root'
})

export class MasterService {

  apiURL: string | undefined;
  webapiApplicationURL = environment.webapibaseURL + 'Users/';
  ordersApiApplicationURL = environment.webapibaseURL + 'Orders/';
  categoriesApiApplicationURL = environment.webapibaseURL + 'Master/';
  inventoriesApiApplicationURL = environment.webapibaseURL + 'Inventories/';
  usersApiApplicationURL = environment.webapibaseURL + 'Users/';
  dahboardURL = environment.webapibaseURL + 'Dashboard/';

  public categoryBean: CategoriesBean = new CategoriesBean();
  public categoryValue: BehaviorSubject<CategoriesBean> = new BehaviorSubject<CategoriesBean>(this.categoryBean);
  menuList: any = [];
  loggedInUserName: any = [];

  constructor(private http: HttpClient) { }

  updateCategoryValue(categories: CategoriesBean): void {
    this.categoryValue.next(categories)
  }

  login(email: any, password: any) {
    this.apiURL = this.webapiApplicationURL + 'Login?email=' + email + '&password=' + password;
    return this.http.get(this.apiURL);
  }

  viewAllOrders() {
    this.apiURL = this.ordersApiApplicationURL + 'ViewAllOrders';
    return this.http.get(this.apiURL);
  }

  addInventories(category: any): Observable<Boolean> {
    this.apiURL = this.inventoriesApiApplicationURL + 'AddInventories';
    return this.http.put<Boolean>(this.apiURL, category);
  }

  editInventories(category: any): Observable<Boolean> {
    this.apiURL = this.inventoriesApiApplicationURL + 'EditInventories';
    return this.http.post<Boolean>(this.apiURL, category);
  }

  deleteInventories(id: any, username: any): Observable<Boolean> {
    this.apiURL = this.inventoriesApiApplicationURL + 'DeleteInventories?id=' + id + '&userName=' + username;
    return this.http.delete<Boolean>(this.apiURL);
  }

  viewInventories(id?: any) {
    if (id == "") {
      this.apiURL = this.inventoriesApiApplicationURL + 'ViewInventories';
    } else {
      this.apiURL = this.inventoriesApiApplicationURL + 'ViewInventories?id=' + id;
    }
    return this.http.get(this.apiURL);
  }

  addCategories(category: any): Observable<any> {
    this.apiURL = this.categoriesApiApplicationURL + 'AddCategories';
    return this.http.put(this.apiURL, category);
  }

  editCategories(category: any): Observable<Boolean> {
    this.apiURL = this.categoriesApiApplicationURL + 'EditCategories';
    return this.http.post<Boolean>(this.apiURL, category);
  }

  deleteCategories(id: any, username: any): Observable<any> {
    this.apiURL = this.categoriesApiApplicationURL + 'DeleteCategories?id=' + id + '&userName=' + username;
    return this.http.delete(this.apiURL);
  }

  viewCategories(id?: any) {
    if (id == "") {
      this.apiURL = this.categoriesApiApplicationURL + 'ViewCategories';
    } else {
      this.apiURL = this.categoriesApiApplicationURL + 'ViewCategories?id=' + id;
    }
    return this.http.get(this.apiURL);
  }

  //User API call---------------------------------------------------
  viewUsers(id?: any) {
    if (id == "") {
      this.apiURL = this.usersApiApplicationURL + 'ViewUsers';
    } else {
      this.apiURL = this.usersApiApplicationURL + 'ViewUsers?id=' + id;
    }
    return this.http.get(this.apiURL);
  }

  addUserDetails(userDetails: any): Observable<any> {
    this.apiURL = this.usersApiApplicationURL + 'AddUsers';
    return this.http.put(this.apiURL, userDetails);
  }

  // addressDetails(addressDetails: any): Observable<any> {
  //   this.apiURL = this.usersApiApplicationURL + 'AddUserDetails';
  //   return this.http.put(this.apiURL, addressDetails);
  // }

  addUserDocs(docDetails: any, fileName : any): Observable<any> {
    let formdata : FormData = new FormData();
    formdata.append("file", fileName);
    formdata.append("details",JSON.stringify(docDetails));
    this.apiURL = this.usersApiApplicationURL + 'AddUserDocs';
    return this.http.put(this.apiURL, formdata);
  }

  editUserDocs(category: any): Observable<Boolean> {
    this.apiURL = this.usersApiApplicationURL + 'EditUserDocs';
    return this.http.post<Boolean>(this.apiURL, category);
  }

  deleteUsers(id: any, username: any): Observable<any> {
    this.apiURL = this.usersApiApplicationURL + 'DeleteUsers?id=' + id + '&userName=' + username;
    return this.http.delete(this.apiURL);
  }

  //CheckPermission
  checkPermission(id: any, pageName : any) {
      this.apiURL = this.usersApiApplicationURL + 'CheckPermission?userID=' + id + '&pageName=' + pageName;
    return this.http.get(this.apiURL);
  }


  // dashboard API call
  GetBoxesData(){
    this.apiURL = this.dahboardURL + 'GetBoxesData';
    return this.http.get(this.apiURL);
  }

  GetUpcomingEMIs(){
    this.apiURL = this.dahboardURL + 'GetUpcomingEMIs';
    return this.http.get(this.apiURL);
  }

  GetTopSellingProducts(){
    this.apiURL = this.dahboardURL + 'GetTopSellingProducts';
    return this.http.get(this.apiURL);
  }

  GetTopSellingEmployees(){
    this.apiURL = this.dahboardURL + 'GetTopSellingEmployees';
    return this.http.get(this.apiURL);
  }
}
