import { Injectable } from '@angular/core';

@Injectable()
export class TemperaturaService {
  constructor() {}
  
  pasarAKelvin(gradosCelsius: number) {
    return gradosCelsius + 273;
  }

  pasarACelsius(gradosKelvin: number) {
    return gradosKelvin - 273;
  }
}
}
