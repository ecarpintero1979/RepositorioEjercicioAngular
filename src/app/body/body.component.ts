import { Component, OnInit, Input } from '@angular/core';
import { TemperaturaService } from '../temperatura.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class MyBodyComponent implements OnInit {
  constructor(private logger: TemperaturaService) {}

  ngOnInit(): void {}

  @Input() temp: string;
  @Input() city: string;

  convertir() {
    this.logger.pasarACelsius();
    this.looger.pasarAKelvin();
  }
}
