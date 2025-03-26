import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoriesListComponent } from './inventories-list/inventories-list.component';
import { CreateUpdateInventoriesComponent } from './create-update-inventories/create-update-inventories.component';

const routes: Routes = [
    { path: '', component: InventoriesListComponent },
    { path: 'create', component: CreateUpdateInventoriesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoriesRoutingModule { }