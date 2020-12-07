import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { AppAuthGuard } from './shared/auth/app.authguard';
import { initializeKeycloak } from './shared/auth/keycloak-initializer';
import { AppRoutingModule } from './app-routing.module';
import { SeguroComponent } from './seguro/seguro.component';

@NgModule({
  declarations: [
    AppComponent,
    SeguroComponent
  ],
  imports: [
    BrowserModule,
    KeycloakAngularModule,
    AppRoutingModule
  ],
  providers: [
    AppAuthGuard,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService]
    },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
