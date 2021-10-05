import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/shared/api.service';
import { Form } from 'src/app/shared/models/form.model';
import { Tenant } from 'src/app/shared/models/tenant.model';
import { TenantFormService } from 'src/app/shared/tenant-form.service';

@Component({
  selector: 'app-tenant-details',
  templateUrl: './tenant-details.component.html',
  styleUrls: ['./tenant-details.component.css']
})
export class TenantDetailsComponent implements OnInit {

  formModel: Form;
  
  constructor(
    private api: ApiService,
    public tenants: TenantFormService,
    private route: ActivatedRoute,
    private router: Router
  ) { 
    let id = this.route.snapshot.paramMap.get('id');

    // Getting model by id
    this.formModel = new Form(new Tenant(), tenants.getTenantFormDetails());
    this.formModel.edit = false;
    this.formModel.model.personalCode = id;
    this.api.getModelById(this.formModel)
      .toPromise()
      .then(res => this.formModel.model = res as Tenant);
  }

  ngOnInit(): void {
  }

}
