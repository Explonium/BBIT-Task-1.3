import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { Form } from 'src/app/shared/models/form.model';

@Component({
  selector: 'app-list-form',
  templateUrl: './list-form.component.html'
})
export class BuildingFormComponent implements OnInit {

  @ViewChild('template') template: TemplateRef<any>;
  @Input() formModel: Form = new Form();
  @Input() visible: boolean = true;
  @Input() onClick: () => void;
  @Input() onDoubleClick: () => void;
  @Input() onSuccess: () => void;

  constructor(public api: ApiService) { }

  ngOnInit(): void {

  }

  onSave(): void{
    this.api.postModel(this.formModel).subscribe(
      res => {
        this.onSuccess();
      },
      err => {
        console.log(err);
      }
    );
  }

  onPost(): void {
    this.api.postModel(this.formModel).subscribe(
      res => {
        this.onSuccess();
      },
      err => {
        console.log(err);
      }
    );
  }

  onPut() {
    this.api.putModel(this.formModel).subscribe(
      res => {
        this.onSuccess();
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
        this.onSuccess();
      },
      err => {
        console.log(err);
      }
    );
  }
}
