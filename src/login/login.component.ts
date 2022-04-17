import { RecEmail } from './../recuperar_senha/recEmail';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Component, OnDestroy, OnInit } from "@angular/core";
import { Usuario } from './usuario';
import { MessageService } from 'primeng/api';


@Component ({
  selector:"app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})

export class LoginComponent implements OnInit, OnDestroy {

  ngOnDestroy(): void {

  }

  usuario: Usuario;

  constructor(private authService: AuthService, private router: Router){}

  ngOnInit() {
    this.usuario = new Usuario();
  }

  fazerLogin(): void{
    this.authService.fazerLogin(this.usuario).subscribe(
      data => {
      console.log(data);
      alert('Login realizado com sucesso!')

      this.router.navigate(['home'])
    },
    error => {
      console.error(error);
      alert('Login falhou! Usuário ou senha incorretas.')
    })
  }

  fazerCadastro() {
  }

  Registrar(){

  }
}
