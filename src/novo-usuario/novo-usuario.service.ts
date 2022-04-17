import { NovoUsuario } from './novo-usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrarService {

  constructor(private httpClient: HttpClient) {
  }

  registraNovoUsuario(novoUsuario: NovoUsuario){
    return this.httpClient.post('http://localhost:8080/api/registrar', novoUsuario);
  }

  verificaUsuarioExistente(nomeUsuario: string){
    return this.httpClient.get(`http://localhost:8080/user/exists/${nomeUsuario}`)
  }
}
