import { SelectButtonModule } from 'primeng/selectbutton';
import { PrimeNGConfig } from 'primeng/api';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {
  value2!: number;
  multiple! :boolean
  paymentOptions!: any[];
  gfg: any[];

  constructor(private primeNGConfig: PrimeNGConfig) {
    this.paymentOptions = [
      { name: 'Option 1', value: 1 },
      { name: 'Option 2', value: 2 },
      { name: 'Option 3', value: 3 },
    ];

    this.gfg = [
      { label: "Selection 1", value: 1 },
      { label: "Selection 2", value: 2 },
      { label: "Selection 3", value: 3 },
    ];
  }

  ngOnInit(): void {
  }

}
