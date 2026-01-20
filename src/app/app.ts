import {Component, signal} from '@angular/core';
import {form, FormField} from '@angular/forms/signals';
import {InputNumber} from 'primeng/inputnumber';
import {Select} from 'primeng/select';

@Component({
  selector: 'app-root',
  imports: [InputNumber, FormField, Select],
  template: `
    <h1>Prime controls</h1>
    <p-input-number [formField]="modelForm.numericValue"></p-input-number>
    <p-select [formField]="modelForm.anotherNumericValue" [options]="options"></p-select>

    <h1>Native controls</h1>
    <input type="number" [formField]="modelForm.numericValue" />
  `
})
export class App {
  options = [1, 2, 3, 4];

  model = signal({
    numericValue: 1,
    anotherNumericValue: 2

  })
  modelForm = form(this.model);
}
