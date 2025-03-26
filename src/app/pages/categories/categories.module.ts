import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { HttpClient, HttpClientModule} from '@angular/common/http';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CreateUpdateCategoriesComponent } from './create-update-categories/create-update-categories.component';
import { CategoriesListComponent } from './categories-list/categories-list.component'

@NgModule({
  declarations: [
    CreateUpdateCategoriesComponent,
    CategoriesListComponent
  ],
  imports: [
    CategoriesRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  entryComponents: [
    CreateUpdateCategoriesComponent, CategoriesListComponent
  ]
})
export class CategoriesModule { }
