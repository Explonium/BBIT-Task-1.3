import { Component, OnInit } from '@angular/core';
import { BuildingDetailService } from '../shared/building-detail.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-building-details',
  templateUrl: './building-details.component.html',
  styleUrls: ['./building-details.component.css']
})
export class BuildingDetailsComponent implements OnInit {

  constructor(public service: BuildingDetailService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  onSubmit(form: NgForm){
    this.service.postBuilding().subscribe(
      res => {},
      err => {
        console.log(err);
      }
    );
  }

}
