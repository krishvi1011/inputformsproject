import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig, SelectItemGroup,SelectItem } from "primeng/api";
interface City {
  name: string,
  code: string
}
@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.css']
})
export class MultiSelectComponent implements OnInit {
  countries!: any[];
  selectedCountries!: any[];

  selectedCity2!: City;
  cities!: City[];
  selectedCities2: string[] = [];


  items!: SelectItem[];

  item!: string;


  constructor(private primengConfig: PrimeNGConfig) {
    this.items = [];

    this.countries = [
      { name: "Australia", code: "AU" },
      { name: "Brazil", code: "BR" },
      { name: "China", code: "CN" },
      { name: "Egypt", code: "EG" },
      { name: "France", code: "FR" },
      { name: "Germany", code: "DE" },
      { name: "India", code: "IN" },
      { name: "Japan", code: "JP" },
      { name: "Spain", code: "ES" },
      { name: "United States", code: "US" }
    ];

    this.cities = [
            {name: 'New York', code: 'NY'},
            {name: 'Rome', code: 'RM'},
            {name: 'London', code: 'LDN'},
            {name: 'Istanbul', code: 'IST'},
            {name: 'Paris', code: 'PRS'}
        ];

  }

  ngOnInit() {
    this.primengConfig.ripple = true;

  }

}
