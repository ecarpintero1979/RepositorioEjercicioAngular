import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class MyFooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() footer: string;
  @Output() setFooterEvent = new EventEmitter();

  updateFooter(param1: string) {
    alert('Actualizando....');
    this.setFooterEvent.emit(param1);
  }
}
