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
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
}
