import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BuildingDetail } from 'src/app/shared/building-detail.model';
import { BuildingDetailService } from 'src/app/shared/building-detail.service';

@Component({
  selector: 'app-building-detail-form',
  templateUrl: './building-detail-form.component.html',
  styleUrls: ['./building-detail-form.component.css']
})
export class BuildingDetailFormComponent implements OnInit {

  constructor(public service: BuildingDetailService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    this.service.postBuilding().subscribe(
      res => {},
      err => {
        console.log(err);
      }
    );
  }

  resetForm(form: NgForm){
    form.reset();
    this.service.formData = new BuildingDetail();
  }
}
