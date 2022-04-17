import { Component } from "@angular/core";

@Component({
  selector: "app-select",
  templateUrl: "./select_registrar.component.html",
  styleUrls:["./select_registrar.component.css"]
})
export class select_registrar {
  setores: any[];


  ngOnInit() {
    this.setores = [
      {
        name: "Atendimento Bol",
      },
      {
        name: "Logistíca Bol",
      },
      {
        name: "CAB",
      }
    ];
  }
}

