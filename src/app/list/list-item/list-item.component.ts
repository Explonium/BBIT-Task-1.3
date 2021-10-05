import { Component, HostListener, ElementRef, Input, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { Building } from 'src/app/shared/models/building.model';
import { BuildingFormService } from 'src/app/shared/building-form.service';
import { ClickOutsideHandler } from 'src/app/shared/logic/click-outside-handler';
import { Form } from 'src/app/shared/models/form.model';
import { BuildingForm } from 'src/app/shared/models/building-form.model';
import { FormInput } from 'src/app/shared/models/input.model';
import { FormData } from 'src/app/shared/models/form-data.model';
import { ApiService } from 'src/app/shared/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: '[app-list-item]',
  templateUrl: './list-item.component.html'
})
export class BuildingListItemComponent extends ClickOutsideHandler implements OnInit {

  @Input() formInfo: FormData = new FormData();
  @Input() model: {[index: string]: any} = {};

  formModel: Form;
  isSingleClick: Boolean = true;
  edit: boolean = false;

  @Output() refreshList: EventEmitter<any> = new EventEmitter();

  constructor(public api: ApiService,
    private route: ActivatedRoute,
    private router: Router) {
    super();
  }
  ngOnInit(): void {
    this.formModel = new Form(this.model, this.formInfo);
    this.formModel.type = 'edit';
    this.formModel.edit = false;
  }

  onSuccess = () => {
    this.refreshList.emit();
    this.edit = false;
  }

  onEdit = () => {
    this.formModel.edit = true;
  }

  onClick = () => {
    this.isSingleClick = true;
    setTimeout(() => {
      if (this.isSingleClick && !this.formModel.edit) {
        this.router.navigate([this.formModel.data.detailsPath, { id: this.model[this.formInfo.idFieldName] }]);
      }
    }, 250);
  }

  override onClickOutside() {
    this.formModel.edit = false;
    this.api.putModel(this.formModel).subscribe(
      res => {
        this.onSuccess();
      },
      err => {
        console.log(err);
      }
    );
  }

  onDoubleClick = () => {
    this.isSingleClick = false;
    this.onEdit();
  }
}
