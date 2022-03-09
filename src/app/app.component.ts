import { Component } from '@angular/core';

// 1.) Convertir este proyecto mono modulo -> mono componente -> con separación de responsabilidades

// 2.) Convertir este proyecto -> nono modulo -> multicomponentes
//      a) Header -> y probamos
//      b) Footer -> y probamos
//      c) Sacamos el layout de columnas a un componente:
//          c1) LOCATION
//          c2) TEMPERATURA
//          c2) CLIMATOLOGIA

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  temp: string = '21';
  header: string = 'FORECAST';
  footer: string = 'FOOTER';

  UpdateFooterText(current: string) {
    this.footer = current;
  }
}

// Ejercicio 4: Eventos que modifican variables de otros componentTypes
// 1.) En el hijo creamos 3 botones (Madrid, Sevilla, La Coruñan)
// 2.) < button on-click="setCity('Sevilla')">Sevilla</button>
// 3.) Vamos al archivo ts del hijo:
//    a) Creamos la funcion declarada (setCity)
//    b) Creamos un evento utilizando @Output: @Output setCityEvent = new EventEmitter();
//    c) Este evento será invocado en la función setCity
// 4.) Haremos en el template del padre en el componente hijo pondremos el manejador del Evento
//    <app-topbarnner (setCityEvent)="actualizarTemperatura($event)"</app-topbarnner>
// 5.) En el ts del padre creo una función actualizarTemperatura que se encargará de modificar la variable temp.
