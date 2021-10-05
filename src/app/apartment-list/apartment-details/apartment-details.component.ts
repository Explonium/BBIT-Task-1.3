import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApartmentFormService } from 'src/app/shared/apartment-form.service';
import { ApiService } from 'src/app/shared/api.service';
import { Apartment } from 'src/app/shared/models/apartment.model';
import { Form } from 'src/app/shared/models/form.model';
import { Tenant } from 'src/app/shared/models/tenant.model';
import { TenantFormService } from 'src/app/shared/tenant-form.service';

@Component({
  selector: 'app-apartment-details',
  templateUrl: './apartment-details.component.html',
  styleUrls: ['./apartment-details.component.css']
})
export class ApartmentDetailsComponent implements OnInit {

  formModel: Form;

  constructor(private api: ApiService,
    public apartments: ApartmentFormService,
    public tenants: TenantFormService,
    private route: ActivatedRoute,
    private router: Router) {

    let id = this.route.snapshot.paramMap.get('id');

    // Getting model by id
    this.formModel = new Form(new Apartment(), apartments.getApartmentFormDetails());
    this.formModel.edit = false;
    this.formModel.model.guid = id;
    this.api.getModelById(this.formModel)
      .toPromise()
      .then(res => this.formModel.model = res as Apartment);
  }

  ngOnInit(): void {
  }
  
  getDefaultModel(): Tenant{
    let tenant = new Tenant();
    tenant.apartmentId = this.formModel.model.guid;
    return tenant;
  }

}
