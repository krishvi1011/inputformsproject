import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputFormComponent } from './input-form/input-form.component';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {CalendarModule} from 'primeng/calendar';
import {InputNumberModule} from 'primeng/inputnumber';
import {ChipsModule} from 'primeng/chips';
import { CheckboxComponent } from './checkbox/checkbox.component';
import {RadioButtonModule} from 'primeng/radiobutton';
import {CheckboxModule} from 'primeng/checkbox';
import { MultiSelectComponent } from './multi-select/multi-select.component';
import {ListboxModule} from 'primeng/listbox';
import {DropdownModule} from 'primeng/dropdown';
import {MultiSelectModule} from 'primeng/multiselect';
import { SliderComponent } from './slider/slider.component';
import {SliderModule} from 'primeng/slider';
import {RatingModule} from 'primeng/rating';
import {InputSwitchModule} from 'primeng/inputswitch';
import { OptionsComponent } from './options/options.component';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {SelectButtonModule} from 'primeng/selectbutton';
import { CardsComponent } from './cards/cards.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ButtonsComponent } from './buttons/buttons.component';
import { TableComponent } from './table/table.component';
import {TableModule} from 'primeng/table';
import { MenuComponent } from './menu/menu.component';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import { MerchantinvoiceComponent } from './merchantinvoice/merchantinvoice.component';
import { PayoutBatchComponent } from './payout-batch/payout-batch.component';
@NgModule({
  declarations: [
    AppComponent,
    InputFormComponent,
    CheckboxComponent,
    MultiSelectComponent,
    SliderComponent,
    OptionsComponent,
    CardsComponent,
    ButtonsComponent,
    TableComponent,
    MenuComponent,
    MerchantinvoiceComponent,
    PayoutBatchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AutoCompleteModule,
    CalendarModule,
    InputNumberModule,
    ChipsModule,
    RadioButtonModule,
    CheckboxModule,
    ListboxModule,
    DropdownModule,
    MultiSelectModule,
    SliderModule,
    RatingModule,
    InputSwitchModule,
    ToggleButtonModule,
    SelectButtonModule,
    BrowserAnimationsModule,
    ButtonModule,
    RippleModule,
    TableModule,
    MenubarModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
