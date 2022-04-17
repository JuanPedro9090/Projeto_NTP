import { ResponseLogin } from './models/response.model';
import { HomeComponent } from './../home/home.component';
import { Usuario } from './usuario';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private httpClient: HttpClient, private routes: Router) {}

  fazerLogin(usuario: Usuario): Observable<ResponseLogin>{
    return this.httpClient.post<ResponseLogin>(
      "http://localhost:8080/api/login", usuario
    );
  }

}
