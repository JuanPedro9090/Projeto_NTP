import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { select_registrar } from './select_registrar/select_registrar.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NovoUsuario } from '../novo-usuario/novo-usuario';
import { RegistrarService } from 'src/novo-usuario/novo-usuario.service';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  novoUsuarioForm!: FormGroup;

  toppings = new FormControl();

  toppingList: string[] = ['Atendimento Bol', 'Logística Bol', 'CAB'];

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private registrarService: RegistrarService,
  ) {}

  ngOnInit(): void {
    this.novoUsuarioForm = this.formBuilder.group({
      name: ['',[Validators.required, Validators.minLength(4)]],
      lastName: ['', [Validators.required, Validators.minLength(4)]],
      matricula: ['', [Validators.required]],
      email: ['',[Validators.required ,Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
      setores: ['']
    })
  }

  cadastrar(){
    if (this.novoUsuarioForm.valid){
      const novoUsuario = this.novoUsuarioForm.getRawValue() as NovoUsuario;
      this.registrarService.registraNovoUsuario(novoUsuario).subscribe(()=>{
        this.router.navigate(['']);
      },
      (error) => {
        console.log(error)
      }
      );
    }

  }

}


