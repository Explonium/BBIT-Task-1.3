import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { BuildingListItemComponent } from './list/list-item/list-item.component';
import { BuildingFormComponent } from './list/list-form/list-form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InputComponent } from './form/input/input.component';
import { TenantListComponent } from './tenant-list/tenant-list.component';
import { TenantDetailsComponent } from './tenant-list/tenant-details/tenant-details.component';
import { SelectComponent } from './form/select/select.component';
import { BuildingListComponent } from './building-list/building-list.component';
import { BuildingDetailsComponent } from './building-list/building-details/building-details.component';
import { ApartmentListComponent } from './apartment-list/apartment-list.component';
import { ApartmentDetailsComponent } from './apartment-list/apartment-details/apartment-details.component';
import { InputTextComponent } from './form/input-text/input-text.component';
import { InputNumberComponent } from './form/input-number/input-number.component';
import { DetailsFormComponent } from './details-form/details-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    BuildingListItemComponent,
    BuildingFormComponent,
    InputComponent,
    TenantListComponent,
    TenantDetailsComponent,
    SelectComponent,
    BuildingListComponent,
    BuildingDetailsComponent,
    ApartmentListComponent,
    ApartmentDetailsComponent,
    InputTextComponent,
    InputNumberComponent,
    DetailsFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
