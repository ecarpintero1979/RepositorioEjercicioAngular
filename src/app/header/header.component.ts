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
    alert('Actualizando.... ' + ciudad);
    this.setCityEvent.emit(ciudad);
  }
}
