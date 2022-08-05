import { Component, OnInit } from '@angular/core';
interface City {
  name: string,
  code: string
}
@Component({
  selector: 'app-merchantinvoice',
  templateUrl: './merchantinvoice.component.html',
  styleUrls: ['./merchantinvoice.component.css']
})
export class MerchantinvoiceComponent implements OnInit {
  cities!: City[];
  selectedCity2!: City;

  constructor() { }

  ngOnInit(){
    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
  ];
  }

}
