import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApartmentDetailsComponent } from './apartment-list/apartment-details/apartment-details.component';
import { ApartmentListComponent } from './apartment-list/apartment-list.component';
import { BuildingDetailsComponent } from './building-list/building-details/building-details.component';
import { BuildingListComponent } from './building-list/building-list.component';
import { ListComponent } from './list/list.component';
import { TenantDetailsComponent } from './tenant-list/tenant-details/tenant-details.component';
import { TenantListComponent } from './tenant-list/tenant-list.component';

const routes: Routes = [
  { path: 'apartments', component: ApartmentListComponent },
  { path: 'apartment-details', component: ApartmentDetailsComponent },
  { path: 'buildings', component: BuildingListComponent },
  { path: 'building-details', component: BuildingDetailsComponent },
  { path: 'tenants', component: TenantListComponent },
  { path: 'tenant-details', component: TenantDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }