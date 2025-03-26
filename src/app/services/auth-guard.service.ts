import { Injectable } from '@angular/core';
import { CanActivate ,ActivatedRouteSnapshot, RouterStateSnapshot,Router} from '@angular/router';
import { MasterService } from './master.service';
import { Base64encodeService } from 'src/app/services/base64encode.service';
@Injectable()
export class AuthGuard implements CanActivate {
  status: boolean | undefined;

  constructor( private router:Router, private masterService : MasterService,private base64encode: Base64encodeService) { 
    // this.handlePageRefresh();
  }

  handlePageRefresh(): void {
    // Clear session storage on refresh
    window.addEventListener('beforeunload', () => {
      sessionStorage.clear();
    });

    // Redirect to login if no session exists
    window.addEventListener('load', () => {
      if (!sessionStorage.getItem('userId')) {
        this.router.navigate(['/login']);
      }
    });
  }
  
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(this.checkPermission(next.routeConfig?.path)){
      return true;
    }
    // this.router.navigateByUrl('/login');
    return false;
  }

  checkPermission(path: any): boolean{
    this.status = false;
    let userId = sessionStorage.getItem('userId');
    this.masterService.checkPermission(this.base64encode.encodeBase64(userId),this.base64encode.encodeBase64(path)).subscribe((res: any) => {
      if(res.message == "Success"){
        this.status = true;
        sessionStorage.setItem('allowedPermission',JSON.stringify(res));
      }else{
        this.status = false;
      }
    })
    return true;
  }

  isLoggedIn() : boolean{
    let status = false;
    if(sessionStorage.getItem('LoggedInStatus')== "true"){
      status = true;
    }else{
      status = false;
    }
    return status;
  }
}
