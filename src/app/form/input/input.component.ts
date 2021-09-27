import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() visible: boolean = false;
  @Input() placeholder: string = "";
  @Input() field: string = "";
  @Input() model: object = {};
  @Input() name: string = "";
    
  constructor() { }

  ngOnInit(): void {
  }

}
