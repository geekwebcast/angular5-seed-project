import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { take } from 'rxjs/operators/take';
import { CoreService } from '@app/core/core.service';

@Injectable()
export class FeatureAuthResolverService implements Resolve<boolean> {
    constructor(
      private router: Router,
      private coreService: CoreService
    ) {}
  
    resolve(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ): Observable<boolean> {
  
      return this.coreService.isAuthenticated.pipe(take(1));
  
    }
  }