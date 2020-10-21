import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLoginError: boolean = false;
  constructor(private userService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
  }

  OnSubmit(userName, password) {
    this.userService.userAuthentication(userName, password).subscribe((data: any) => {
      localStorage.setItem('userToken', data.access_token);
      this.router.navigate(['/home']);
    },
      (err: HttpErrorResponse) => {
        this.isLoginError = true;
      });
  }

}
