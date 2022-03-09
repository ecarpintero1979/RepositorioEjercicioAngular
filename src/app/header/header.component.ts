import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class MyHeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() header: string;
  @Output() setCityEvent = new EventEmitter();

  updateCity(ciudad: string) {
    switch (ciudad) {
      case 'MADRID':
        this.setCityEvent.emit('23');
        break;
      case 'SEVILLA':
        this.setCityEvent.emit('30');
        break;
      case 'LA CORUÑA':
        this.setCityEvent.emit('18');
        break;
    }
  }
}
