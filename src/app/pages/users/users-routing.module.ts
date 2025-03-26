import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { CreateUpdateUsersComponent } from './create-update-users/create-update-users.component';

const routes: Routes = [
    { path: '', component: UsersListComponent },
    { path: 'create', component: CreateUpdateUsersComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }