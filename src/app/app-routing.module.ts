import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NotAllowedComponent } from './pages/not-allowed/not-allowed.component';
import { AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'Dashboard', component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'not-allowed', component: NotAllowedComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Category',
    loadChildren: () => import('./pages/categories/categories.module').then(m => m.CategoriesModule),
    canActivate: [AuthGuard]
  }, {
    path: 'Inventories',
    loadChildren: () => import('./pages/inventories/inventories.module').then(m => m.InventoriesModule),
    canActivate: [AuthGuard]
  }, {
    path: 'Users',
    loadChildren: () => import('./pages/users/users.module').then(m => m.UsersModule),
    canActivate: [AuthGuard]
  }, {
    path: 'Orders',
    loadChildren: () => import('./pages/orders/orders.module').then(m => m.OrdersModule),
    canActivate: [AuthGuard]
  },
  //Otherwise redirect to Home
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }