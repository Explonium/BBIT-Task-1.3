import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { ApartmentFormService } from 'src/app/shared/apartment-form.service';
import { BuildingFormService } from 'src/app/shared/building-form.service';
import { ClickOutsideHandler } from 'src/app/shared/logic/click-outside-handler';
import { Apartment } from 'src/app/shared/models/apartment.model';
import { Building } from 'src/app/shared/models/building.model';

@Component({
  selector: '[app-apartment-item]',
  templateUrl: './apartment-item.component.html',
  styleUrls: ['./apartment-item.component.css']
})
export class ApartmentItemComponent extends ClickOutsideHandler {

  isSingleClick: Boolean = true;
  public edit: boolean = false;

  @Input()
  apartment: Apartment = new Apartment();

  constructor(public service: ApartmentFormService, public buildings: BuildingFormService, private eRef: ElementRef) {
    super();
  }

  getCurrentBuildingName(){
    let found = this.buildings.list.find(item => item.id === this.apartment.buildingId);
    let building = found ? found : new Building();
    return this.getBuildingName(building);
  }

  getBuildingName(building: Building){
    return `${building.street} ${building.number}, ${building.city}, ${building.country}`;
  }

  onSave(): void {
    this.service.putApartment(this.apartment).subscribe(
      res => {
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    );
  }

  onCopy() {
    this.service.postApartment(this.apartment).subscribe(
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
    this.service.deleteApartment(this.apartment).subscribe(
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
