import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApartmentListComponent } from './apartment-list/apartment-list.component';
import { BuildingListComponent } from './building-list/building-list.component';
import { TenantListComponent } from './tenant-list/tenant-list.component';

const routes: Routes = [
  { path: 'buildings', component: BuildingListComponent },
  { path: 'apartments', component: ApartmentListComponent },
  { path: 'tenants', component: TenantListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }