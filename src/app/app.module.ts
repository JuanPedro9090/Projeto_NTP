import { MensagemModule } from './componentes/mensagem/mensagem.module';
import { RecuperacaoComponent } from './../recuperar_senha/recuperacao/recuperacao.component';
import { HomeComponent } from './../home/home.component';
import { AuthService } from '../login/auth.service';
import { LoginComponent } from './../login/login.component';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MenubarModule} from 'primeng/menubar';
import {MenubarComponent} from '../menubar/menubar.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule, FormControl } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localePT from '@angular/common/locales/pt'
import {HttpClientModule} from '@angular/common/http';
import { RegistrarComponent } from '../registrar/registrar.component';
import {MatSelectModule} from '@angular/material/select';
import {ReactiveFormsModule} from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AccordionModule} from 'primeng/accordion';
import {MenuItem} from 'primeng/api';
import { CascadeSelectModule } from "primeng/cascadeselect";
import { select_registrar } from './../registrar/select_registrar/select_registrar.component';
import {FocusTrapModule} from 'primeng/focustrap';
import {ToastModule} from 'primeng/toast';
import {DialogModule, Dialog} from 'primeng/dialog';

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    LoginComponent,
    HomeComponent,
    RegistrarComponent,
    select_registrar,
    RecuperacaoComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    HttpClientModule,
    MatSelectModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CascadeSelectModule,
    FocusTrapModule,
    DialogModule,
    MensagemModule,
  ],
  providers: [AuthService,
    {provide: LOCALE_ID, useValue: 'pt'},
    {provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
