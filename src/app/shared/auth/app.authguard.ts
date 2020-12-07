import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { KeycloakAuthGuard, KeycloakService } from 'keycloak-angular';

@Injectable()
export class AppAuthGuard extends KeycloakAuthGuard implements CanActivate {
  constructor(
    protected router: Router,
    protected keycloakService: KeycloakService
  ) {
    super(router, keycloakService);
  }

  isAccessAllowed(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return new Promise(async (resolve, reject) => {
      console.log('Ole .. =D');

      if (!this.authenticated) {
        await this.keycloakService.login();
        return;
      } else {
        return resolve(true);
      }
    });
  }

}
