import { RecEmail } from './../recEmail';
import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { DialogModule, Dialog } from 'primeng/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperacao',
  templateUrl: './recuperacao.component.html',
  styleUrls: ['./recuperacao.component.css', "../../login/login.component.css"]
})
export class RecuperacaoComponent implements OnInit {

  RecEmail: RecEmail;

  constructor(private primengConfig: PrimeNGConfig, private router: Router) { }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  displayModal: boolean;

  showModalDialog() {
    this.displayModal = true;
}


}
