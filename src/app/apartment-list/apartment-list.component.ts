import { Component, OnInit } from '@angular/core';
import { ApartmentFormService } from '../shared/apartment-form.service';
import { ApartmentForm } from '../shared/models/apartment-form.model';
import { FormData } from '../shared/models/form-data.model';
import { Tenant } from '../shared/models/tenant.model';

@Component({
  selector: 'app-apartment-list',
  templateUrl: './apartment-list.component.html'
})
export class ApartmentListComponent implements OnInit {

  formInfo: FormData;

  constructor(public service: ApartmentFormService) {
    this.formInfo = service.getApartmentFormDetails();
   }

  ngOnInit(): void {
  }

}
