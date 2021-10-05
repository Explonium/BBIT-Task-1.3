import { Component, OnInit } from '@angular/core';
import { TenantFormService } from '../shared/tenant-form.service';
import { FormData } from '../shared/models/form-data.model';

@Component({
  selector: 'app-tenant-list',
  templateUrl: './tenant-list.component.html'
})
export class TenantListComponent implements OnInit {

  formInfo: FormData;

  constructor(public service: TenantFormService) {
    this.formInfo = service.getTenantFormDetails();
   }

  ngOnInit(): void {
  }

}
