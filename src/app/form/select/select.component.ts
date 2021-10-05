import { Component, Input, OnInit } from '@angular/core';
import { FormInput } from 'src/app/shared/models/input.model';
import { FormSelect } from 'src/app/shared/models/select.model';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html'
})
export class SelectComponent implements OnInit {

  @Input() inputModel: FormSelect = new FormSelect();
  @Input() model: { [index: string]: any } = {};
  @Input() visible: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
}
