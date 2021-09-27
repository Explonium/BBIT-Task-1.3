import { Component, HostListener, ElementRef, Input, OnInit } from '@angular/core';
import { Building } from 'src/app/shared/models/building.model';
import { BuildingFormService } from 'src/app/shared/building-form.service';
import { ClickOutsideHandler } from 'src/app/shared/logic/click-outside-handler';

@Component({
  selector: '[app-building-list-item]',
  templateUrl: './building-list-item.component.html',
  styleUrls: ['./building-list-item.component.css']
})
export class BuildingListItemComponent extends ClickOutsideHandler {

  isSingleClick: Boolean = true;
  public edit: boolean = false;

  @Input()
  building: Building = new Building();

  constructor(public service: BuildingFormService, private eRef: ElementRef) {
    super();
  }

  onSave(): void {
    this.service.putBuilding(this.building).subscribe(
      res => {
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    );
  }

  onCopy() {
    this.service.postBuilding(this.building).subscribe(
      res => {
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    );
  }

  onEdit(): void {
    this.edit = true;
  }

  onDelete(): void {
    this.service.deleteBuilding(this.building).subscribe(
      res => {
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    );
  }

  onClick() {
    this.isSingleClick = true;
    setTimeout(() => {
      if (this.isSingleClick) {

      }
    }, 250)
  }

  override onClickOutside() {
    this.onSave();
  }

  onDoubleClick() {
    this.isSingleClick = false;
    this.onEdit();
  }
}
