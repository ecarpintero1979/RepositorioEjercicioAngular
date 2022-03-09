import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class MyHeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() title: string;
  @Output() setCityTempEvent = new EventEmitter();
  @Output() setCityNameEvent = new EventEmitter();

  updateCity(ciudad: string) {
    this.setCityNameEvent.emit(ciudad);
    switch (ciudad) {
      case 'MADRID':
        this.setCityTempEvent.emit('23');
        break;
      case 'SEVILLA':
        this.setCityTempEvent.emit('30');
        break;
      case 'LA CORUÑA':
        this.setCityTempEvent.emit('18');
        break;
      default:
        this.setCityTempEvent.emit('21');
        this.setCityNameEvent.emit('NEW YORK');
        break;
    }
  }
}
