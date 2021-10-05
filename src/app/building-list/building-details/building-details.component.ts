import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApartmentFormService } from 'src/app/shared/apartment-form.service';
import { ApiService } from 'src/app/shared/api.service';
import { BuildingFormService } from 'src/app/shared/building-form.service';
import { Apartment } from 'src/app/shared/models/apartment.model';
import { Building } from 'src/app/shared/models/building.model';
import { Form } from 'src/app/shared/models/form.model';

@Component({
  selector: 'app-building-details',
  templateUrl: './building-details.component.html'
})
export class BuildingDetailsComponent implements OnInit {

  formModel: Form;

  constructor(
    private api: ApiService,
    public buildings: BuildingFormService,
    public apartments: ApartmentFormService,
    private route: ActivatedRoute,
    private router: Router) {

    // Getting id
    let id = this.route.snapshot.paramMap.get('id');

    // Getting model by id
    this.formModel = new Form(new Building(), buildings.getBuildingFormDetails());
    this.formModel.model.id = id;
    this.api.getModelById(this.formModel)
      .toPromise()
      .then(res => this.formModel.model = res as Building);
  }

  ngOnInit(): void {
  }

  getDefaultModel(): Apartment{
    let apartment = new Apartment();
    apartment.buildingId = this.formModel.model.id;
    return apartment;
  }
}
