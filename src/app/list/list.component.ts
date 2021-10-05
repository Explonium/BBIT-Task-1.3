import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BuildingFormService } from '../shared/building-form.service';
import { BuildingForm } from '../shared/models/building-form.model';
import { Building } from '../shared/models/building.model';
import { Form } from '../shared/models/form.model';
import { FormData } from '../shared/models/form-data.model';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {

  @Input() list: Array<object>;
  @Input() formInfo: FormData = new FormData();
  @Input() defaultModel: {[index: string]: any};

  formModel: Form;

  @Output() refreshList: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.formModel = new Form(this.defaultModel, this.formInfo);
    this.formModel.type = 'create';
    this.refreshList.emit();
  }

  onSuccess = () => {
    this.refreshList.emit();
    this.formModel = new Form(this.defaultModel, this.formInfo);
    this.formModel.type = 'create';
  }
}
