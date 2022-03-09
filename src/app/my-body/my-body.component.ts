import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-body',
  templateUrl: './my-body.component.html',
  styleUrls: ['./my-body.component.css']
})
export class MyBodyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  temp = 23;
  
}
