import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Primer proyecto';

  public edadUno;
  public edadDos;
  public resultadoPromedio;
  public resultadoSuma;

  promedio() {
    this.resultadoPromedio = (Number(this.edadUno) + Number(this.edadDos))/2;
  }

  suma() {
    this.resultadoSuma = (Number(this.edadUno) + Number(this.edadDos));
  }

  calcular() {
    this.suma();
    this.promedio();
  }

  limpiar() {
    this.edadUno = "";
    this.edadDos = "";
    this.resultadoPromedio = "";
    this.resultadoSuma = "";
  }
}
