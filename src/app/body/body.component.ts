import { Component, OnInit, Input } from '@angular/core';
import { TemperaturaService } from '../temperatura.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class MyBodyComponent implements OnInit {
  constructor(private tempConverter: TemperaturaService) {}

  ngOnInit(): void {}

  @Input() temp: string;
  @Input() city: string;

  convertirToC() {
    this.temp = this.tempConverter.pasarACelsius(Number(this.temp)).toString();
  }
  convertirToK() {
    this.temp = this.tempConverter.pasarAKelvin(Number(this.temp)).toString();
  }
}
