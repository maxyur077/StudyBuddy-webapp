import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
  RouterModule
} from '@angular/router';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const user_id = localStorage.getItem('user_id');
    const user_stage = localStorage.getItem('user_stage');
    console.log(user_id, user_stage);
 
    if (user_id && user_stage) {
      console.log('entered');

      switch (user_stage) {
        case 'ONBOARDING':
          if (state.url !== '/on-boarding') {
            this.router.navigate(['/on-boarding']);
          }
          return false;

        case 'REGISTERED':
          if (state.url !== '/community') {
            this.router.navigate(['/community']);
          }
          return false;

        default:
          if (state.url !== '/login') {
            this.router.navigate(['/login']);
          }
          return false;
      }
        
    } else {
      if (state.url !== '/login') {
        this.router.navigate(['/login']);
      }
      return false;
    }
  }
}
