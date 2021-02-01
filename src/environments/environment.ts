import { KeycloakConfig, KeycloakLoginOptions } from 'keycloak-js';

export const keycloakConfig: KeycloakConfig = {
  url: 'http://localhost:8080/auth',
  realm: 'appFinanzas',
  clientId: 'finanzas_frontend',
};

export const keycloakLoginRegisterOptionsConfig: KeycloakLoginOptions = {
  redirectUri: 'http://localhost:4200',
};

export const environment = {
  production: true,
  serverUrl: 'http://localhost:4200',
  apiUrl: 'http://localhost:8090',
  defaultLanguage: 'es-CO',
  supportedLanguages: ['en-US', 'es-CO'],
  rtl: false,
  keycloak: keycloakConfig,
  keycloakLoginRegisterOptions: keycloakLoginRegisterOptionsConfig,
};
