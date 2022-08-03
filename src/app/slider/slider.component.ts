import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  val2: number = 50;
  val!: number;
  checked!: boolean;


  constructor() { }

  ngOnInit(): void {
  }

}
