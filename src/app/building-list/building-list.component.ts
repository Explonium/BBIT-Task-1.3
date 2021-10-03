import { Component, OnInit } from '@angular/core';
import { BuildingFormService } from '../shared/building-form.service';
import { BuildingForm } from '../shared/models/building-form.model';
import { FormData } from '../shared/models/form-data.model';

@Component({
  selector: 'app-building-list',
  templateUrl: './building-list.component.html'
})
export class BuildingListComponent implements OnInit {

  formInfo: FormData = new BuildingForm();

  constructor(public service: BuildingFormService) { }

  ngOnInit(): void {
  }

}
