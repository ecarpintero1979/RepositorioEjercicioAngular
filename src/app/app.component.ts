import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  city: string = 'NEW YORK';
  temp: string = '21';
  title: string = 'APP PREVISIÓN DEL TIEMPO';
  footer: string = 'FOOTER';
  fecha: Date = new Date(1979, 3, 25);

  updateFooterText(current: string) {
    this.footer = current;
  }

  actualizarTemperatura(current: string) {
    this.temp = current;
  }

  actualizarCiudad(current: string) {
    this.city = current;
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
// 4.) Este evento invocará a la función actualizar ciudad que crearemos en el padre <app-topbanner (setCityNameEvent)="actualizarCiudad($event)"></app-topbanner> y además pasar la ciudad al app-location <app-location [ciudad]="ciudad"></app-location>
// 5.) En el ts del padre, creo la función actualizarCiudad que se encargará de modificar la variable ciudad que tendremos que crear.
// 6.) En el template del hijo LOCATION tendremos que usar directivas para mostrar diferente imágenes en función de la ciudadv clicada
//    a) Sevilla: "https://cloudfront-eu-central-1.images.arcpublishing.com/prisaradio/YZQY7B2VJNIHJNI2NUTNEER4UQ.jpg"
//    b) Madrid: "https://s03.s3c.es/imag/_v0/770x420/f/7/a/madrid-centro-coches-dreamstime.jpg"
//    c) La Coruña: https://www.sientegalicia.com/blog/wp-content/uploads/2017/10/Torre-de-Hercules-A-Coruna.jpg

// EJERCICIO 6: Añadir una fecha en el componente root y mostrarla en el footer formateada con un PIPE (dd/MM/yyyy)
// 1.) Creamos una variable fecha de tipo Date en el componente root
// 2.) Pasanos la variabe al componente hijo (footer) mediante el binding de propiedades [] en el template del padre
// 3.) Creamos la variable en el hijo y la anotamos con @Input
// 4.) En el template del hijo usamos la variable por interpolación PRIMERO SIN usar ninguna PIPE
// 5.) Utilizando la PIPE DatePipe con el formato (dd/MM/yyyy)

// EJERCICIO 7: Añadir un servicio que convierta de celsius a kelvin
// 1.) Lo primero es crear un servicio (Angular -> Generator -> Servicio) y lo llamamos temperatura
// 2.) Verificar que la nueva clase creada tienen el decorador Injectable -> que es un servicio
// 3.) Crear en el archivo de  servicio las funciones que proporcionara nuestro servicio
//        a) pasarAKelvin
//        b) pasarACelsius
// 4.) Lo  añadimos al módulo mediante importación y lo añadimos a providers en los metadaros (app.module.ts)
//        a) Lo importamos como cualquier componente
//        b) Lo añadimos a la seccion providers de los metadatos (crear la sección en el caso que no exista)
// 5.) Lo injectamos en el constructor del componente que los vaya consumir
//        a) Lo importamos en el componente (archivo ts)
//        b) Lo injectamos en el contructor como parámetro privado: constructor(private logger: TemperaturaService) {}
// 6.) Creo en el componente que consume el servicio dos funciones (convertir) que use algún servicio
// 7.) En la vista del componente llamo a la función que consume el servicio con dos botones
