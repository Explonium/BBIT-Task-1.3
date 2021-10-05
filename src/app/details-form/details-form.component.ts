import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { Form } from '../shared/models/form.model';

@Component({
  selector: 'app-details-form',
  templateUrl: './details-form.component.html'
})
export class DetailsFormComponent implements OnInit {

  @Input() formModel: Form;
  @Output() onSuccess: EventEmitter<any> = new EventEmitter();
  
  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }

  onSave(): void {
    this.api.putModel(this.formModel).subscribe(
      res => {
        this.onSuccess.emit();
        this.formModel.edit = false;
      },
      err => {
        console.log(err);
      }
    );
  }

  onEdit() {
    this.formModel.edit = true;
  }

  onDelete() {
    this.api.deleteModel(this.formModel).subscribe(
      res => {
        this.onSuccess.emit();
      },
      err => {
        console.log(err);
      }
    );
  }

}
