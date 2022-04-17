import { RecuperacaoComponent } from './../recuperar_senha/recuperacao/recuperacao.component';
import { RegistrarComponent } from '../registrar/registrar.component';
import { HomeComponent } from './../home/home.component';
import { LoginComponent } from './../login/login.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', component: LoginComponent },
  {path: 'registrar', component: RegistrarComponent},
  {path: 'recuperacao', component: RecuperacaoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
