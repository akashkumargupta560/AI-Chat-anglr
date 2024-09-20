import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleButtonComponent } from './lib/toggle-button/toggle-button.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    ToggleButtonComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    ToggleButtonComponent
  ]
})
export class SharedModule { }
