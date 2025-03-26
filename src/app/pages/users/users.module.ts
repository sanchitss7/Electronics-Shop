import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { CreateUpdateUsersComponent } from './create-update-users/create-update-users.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersRoutingModule } from './users-routing.module';
@NgModule({
  declarations: [
    CreateUpdateUsersComponent,
    UsersListComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  entryComponents: [UsersListComponent, CreateUpdateUsersComponent]
})
export class UsersModule { }
