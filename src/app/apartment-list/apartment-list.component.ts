import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApartmentFormService } from '../shared/apartment-form.service';
import { BuildingFormService } from '../shared/building-form.service';
import { Apartment } from '../shared/models/apartment.model';

@Component({
  selector: 'app-apartment-list',
  templateUrl: './apartment-list.component.html',
  styleUrls: ['./apartment-list.component.css']
})
export class ApartmentListComponent implements OnInit {

  apartment: Apartment = new Apartment();

  constructor(public service: ApartmentFormService, public buildings: BuildingFormService) { }

  ngOnInit(): void {
    this.service.refreshList();
    this.buildings.refreshList();
  }

  onSubmit(form: NgForm){
    
  }

  onSave(): void{
    this.service.postApartment(this.apartment).subscribe(
      res => {
        this.service.refreshList();
        this.apartment = new Apartment();
      },
      err => {
        console.log(err);
      }
    );
  }

}
