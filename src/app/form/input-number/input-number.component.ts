import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[app-input-number]',
  templateUrl: './input-number.component.html'
})
export class InputNumberComponent implements OnInit {

  @Input() visible: boolean = false;
  @Input() placeholder: string = "";
  @Input() field: string = "";
  @Input() model: {[index: string]: any;} = {};

  constructor() { }

  ngOnInit(): void {
  }
}
