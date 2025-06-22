import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../service/Auth/Auth.service';
import { inject } from '@angular/core';

export const userGuard: CanActivateFn = (route, state) => {
    let _AuthService:AuthService =  inject(AuthService);
  let _Router:Router = inject(Router);
  if(_AuthService.userData.getValue() != null) {
    return true;
  }
  _Router.navigate(["/login"]);
  return false;

};
