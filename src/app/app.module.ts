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


@NgModule({
  declarations: [
    AppComponent,
    InputFormComponent,
    CheckboxComponent,
    MultiSelectComponent,
    SliderComponent,
    OptionsComponent,
    CardsComponent
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
    SelectButtonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
