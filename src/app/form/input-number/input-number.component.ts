import { Component, Input, OnInit } from '@angular/core';
import { FormInput } from 'src/app/shared/models/input.model';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html'
})
export class InputNumberComponent implements OnInit {

  @Input() inputModel: FormInput = new FormInput();
  @Input() model: { [index: string]: any };
  @Input() visible: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
