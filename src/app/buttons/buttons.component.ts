import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styles: [`
  :host ::ng-deep button {
      margin-right: .5em;
  }
`]
})
export class ButtonsComponent implements OnInit {

  constructor(private primengConfig: PrimeNGConfig) { }

  ngOnInit(){
    this.primengConfig.ripple = true;

  }

}
