import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  city: string = 'NEW YORK';
  temp: string = '21';
  header: string = 'FORECAST';
  footer: string = 'FOOTER';

  updateFooterText(current: string) {
    this.footer = current;
  }

  actualizarTemperatura(current: string) {
    this.temp = current;
  }
}

// EJERCICIO 1: Convertir este proyecto mono modulo -> mono componente -> con separación de responsabilidades

// EJERCICIO 2: Convertir este proyecto -> nono modulo -> multicomponentes
//      a) Header -> y probamos
//      b) Footer -> y probamos
//      c) Sacamos el layout de columnas a un componente:
//          c1) LOCATION
//          c2) TEMPERATURA
//          c2) CLIMATOLOGIA

// EJERCICIO 3: ??????

// EJERCICIO 4: Eventos que modifican variables de otros componentTypes
// 1.) En el hijo creamos 3 botones (Madrid, Sevilla, La Coruña)
// 2.) < button on-click="setCity('Sevilla')">Sevilla</button>
// 3.) Vamos al archivo ts del hijo:
//    a) Creamos la funcion declarada (setCity)
//    b) Creamos un evento utilizando @Output: @Output setCityEvent = new EventEmitter();
//    c) Este evento será invocado en la función setCity
// 4.) Haremos en el template del padre en el componente hijo pondremos el manejador del Evento
//    <app-topbarnner (setCityEvent)="actualizarTemperatura($event)"</app-topbarnner>
// 5.) En el ts del padre creo una función actualizarTemperatura que se encargará de modificar la variable temp.

// EJERCICIO 5: Uso de directivas para renderizar diferente contenido
// 1.) Los botones tienen que funcionar para cambiar la temperatura
// 2.) Añadir otro output con el nombre de la ciudad y emitir un nuevo evento en la funcion setCity
// 3.) En el template del padre añado un manejador de evento para el nuevo evento (setCityNameEvent)
// 4.) Este evento invocará a la funcion actualizar ciudad que crearemos en el padre <app-topbanner (setCityNameEvent)="actualizarCiudad($event)"></app-topbanner> y además pasar la ciudad al app-location <app-location [ciudad]="ciudad"></app-location>
// 5.) En el ts del padre, creo la función actualizarCiudad que se encargará de modificar la variable ciudad que tendremos que crear.
// 6.) En el template del hijo LOCATION tendremos que usar directivas para mostrar diferente imágenes en función de la ciudadv clicada
//    a) Sevilla: "https://cloudfront-eu-central-1.images.arcpublishing.com/prisaradio/YZQY7B2VJNIHJNI2NUTNEER4UQ.jpg"
//    b) Madrid: "https://s03.s3c.es/imag/_v0/770x420/f/7/a/madrid-centro-coches-dreamstime.jpg"
//    c) La Coruña: https://www.sientegalicia.com/blog/wp-content/uploads/2017/10/Torre-de-Hercules-A-Coruna.jpg
