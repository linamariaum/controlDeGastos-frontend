import { Component, OnInit } from '@angular/core';
import * as jQuery from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'controlDeGastos-frontend';
  private roles: string[];
  isLoggedIn = true;
  username: string;
  idUser: string;
  avatar: string;
  UsuarioId = [];
  constructor() { }

  ngOnInit() {
    this.username = "Pepita Perez";
    this.idUser = "100384221";

    var contenerdor = document.getElementById("container-login");
    var oculto = document.getElementById("menu-toggle");

    if (this.isLoggedIn == false) {
      contenerdor.style.backgroundColor = "#0096CE";
      contenerdor.style.height = "100%";
      oculto.style.display = "none"
    } else {
      contenerdor.style.backgroundColor = "#dddada"
    }

    jQuery("#menu-toggle").click(function (e) {
      e.preventDefault();
      jQuery("#wrapper").toggleClass("toggled");
    });

  }

  logout() {
    console.log("Te fuiste");
  }


  editUser(id) {
    console.log("A editar!!");
  }
}
