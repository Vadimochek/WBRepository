import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  CanActivate, CanLoad, Route,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree
} from '@angular/router';
import {first, map, Observable, of} from 'rxjs';
import {TokenService} from "../services/token.service";
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class TokenGuard implements CanActivate {

  tokenArray: string[]
  accessRights: boolean

  constructor(
    private tokenService: TokenService,
    private toastr: ToastrService,
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.getAccess(route.data[0], route.url.toString())
  }

  //https://fir-auth-93a4f-default-rtdb.europe-west1.firebasedatabase.app/access-rights.json
  getAccess(token: string, url: string){

      return this.tokenService
        .getTokensArray("https://fir-auth-93a4f-default-rtdb.europe-west1.firebasedatabase.app/access-rights.json")
        .pipe(
          first(),
          map(value => {
            if (!value.data.includes(token)) {
              this.toastr.error("Нет прав к странице "+url, "Отказано в доступе")
              return false
            }
            else {
              return true
            }
          }))
  }

}
