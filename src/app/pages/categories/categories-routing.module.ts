import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { CreateUpdateCategoriesComponent } from './create-update-categories/create-update-categories.component';

const routes: Routes = [
    { path: '', component: CategoriesListComponent },
    { path: 'create', component: CreateUpdateCategoriesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }