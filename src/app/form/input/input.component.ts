import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormInput } from 'src/app/shared/models/input.model';
import { FormSelect } from 'src/app/shared/models/select.model';

@Component({
  selector: '[app-input]',
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit {

  @Input() inputModel: FormInput = new FormInput();
  @Input() model: { [index: string]: any };
  @Input() visible: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onChange() {

  }

  toFormSelect(inputModel: FormInput) {
    return inputModel as FormSelect;
  }
}
