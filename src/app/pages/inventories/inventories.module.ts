import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { HttpClient, HttpClientModule} from '@angular/common/http';

import { InventoriesRoutingModule } from './inventories-routing.module';
import { InventoriesListComponent } from './inventories-list/inventories-list.component';
import { CreateUpdateInventoriesComponent } from './create-update-inventories/create-update-inventories.component';

@NgModule({
  declarations: [
    InventoriesListComponent,
    CreateUpdateInventoriesComponent,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    InventoriesRoutingModule,
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  entryComponents: [InventoriesListComponent, CreateUpdateInventoriesComponent]
})
export class InventoriesModule { }
