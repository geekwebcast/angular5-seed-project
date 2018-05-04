import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { CoreService } from '@app/core/core.service';
import { map } from 'rxjs/operators/map';
import { take } from 'rxjs/operators/take';

@Injectable()
export class NoAuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private  coreService:CoreService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    debugger;
    let value=this.coreService.isAuthenticated.pipe(take(1), map(isAuth => !isAuth));
    console.log(this.coreService.isAuthenticated.pipe(take(1), map(isAuth => !isAuth)));
    return this.coreService.isAuthenticated.pipe(take(1), map(isAuth => !isAuth));

  }
}