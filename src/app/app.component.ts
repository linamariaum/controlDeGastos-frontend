import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'controlDeGastos-frontend';

  constructor( private router: Router,
    private keycloakService: KeycloakService) {}

  async ngOnInit() {
    console.log(await this.keycloakService.loadUserProfile())
  }

  logout() {
    this.keycloakService.logout(environment.serverUrl);
    localStorage.clear();
  }

  irASeguro() {
    this.router.navigate(['/seguro']);
  }

}
