import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html'
})
export class SelectComponent implements OnInit {

  @Input() visible: boolean = false;
  @Input() placeholder: string = "";
  @Input() field: string = "";
  @Input() model: {[index: string]: any;} = {};

  constructor() { }

  ngOnInit(): void {
  }
}
