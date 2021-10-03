import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuildingListComponent } from './building-list/building-list.component';
import { ListComponent } from './list/list.component';
import { TenantListComponent } from './tenant-list/tenant-list.component';

const routes: Routes = [
  { path: 'buildings', component: BuildingListComponent },
  { path: 'tenants', component: TenantListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }