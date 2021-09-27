import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BuildingFormService } from '../shared/building-form.service';
import { Building } from '../shared/models/building.model';

@Component({
  selector: 'app-building-list',
  templateUrl: './building-list.component.html',
  styleUrls: ['./building-list.component.css']
})
export class BuildingListComponent implements OnInit {

  building: Building = new Building();

  constructor(public service: BuildingFormService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  onSubmit(form: NgForm){
    
  }

  onSave(): void{
    this.service.postBuilding(this.building).subscribe(
      res => {
        this.service.refreshList();
        this.building = new Building();
      },
      err => {
        console.log(err);
      }
    );
  }

}
