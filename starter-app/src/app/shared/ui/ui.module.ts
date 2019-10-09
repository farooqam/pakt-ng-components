import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { ToggleComponent } from './components/toggle/toggle.component';


@NgModule({
  declarations: [
    CheckboxComponent,
    ToggleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CheckboxComponent,
    ToggleComponent
  ]
})
export class UiModule { }
