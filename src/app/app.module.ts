import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuildingListComponent } from './building-list/building-list.component';
import { BuildingListItemComponent } from './building-list/building-list-item/building-list-item.component';
import { BuildingListFormComponent } from './building-list/building-list-form/building-list-form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InputComponent } from './form/input/input.component';
import { BuildingDetailsComponent } from './building-list/building-details/building-details.component';
import { ApartmentListComponent } from './apartment-list/apartment-list.component';
import { ApartmentItemComponent } from './apartment-list/apartment-item/apartment-item.component';
import { ApartmentFormComponent } from './apartment-list/apartment-form/apartment-form.component';
import { ApartmentDetailsComponent } from './apartment-list/apartment-details/apartment-details.component';
import { TenantListComponent } from './tenant-list/tenant-list.component';
import { TenantItemComponent } from './tenant-list/tenant-item/tenant-item.component';
import { TenantFormComponent } from './tenant-list/tenant-form/tenant-form.component';
import { TenantDetailsComponent } from './tenant-list/tenant-details/tenant-details.component';

@NgModule({
  declarations: [
    AppComponent,
    BuildingListComponent,
    BuildingListItemComponent,
    BuildingListFormComponent,
    InputComponent,
    BuildingDetailsComponent,
    ApartmentListComponent,
    ApartmentItemComponent,
    ApartmentFormComponent,
    ApartmentDetailsComponent,
    TenantListComponent,
    TenantItemComponent,
    TenantFormComponent,
    TenantDetailsComponent
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
