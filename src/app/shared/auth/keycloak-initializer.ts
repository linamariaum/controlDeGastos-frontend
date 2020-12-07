import { KeycloakEventType, KeycloakService } from 'keycloak-angular';
import { environment } from 'src/environments/environment';

export function initializeKeycloak(
  keycloak: KeycloakService
): () => Promise<any> {
  return (): Promise<any> => {
    return new Promise(async (resolve, reject) => {
      try {
        keycloak.keycloakEvents$.subscribe(event => {
          if (event.type === KeycloakEventType.OnAuthLogout) {
            sessionStorage.clear();
            localStorage.clear();
          }
        });
        await keycloak.init({
          config: environment.keycloak,
          loadUserProfileAtStartUp: true,
          initOptions: {
            onLoad: 'check-sso',
            silentCheckSsoRedirectUri:
              window.location.origin + '/assets/silent-check-sso.html',
          },
          enableBearerInterceptor: true,
          bearerExcludedUrls: [],
        });
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  };
}
