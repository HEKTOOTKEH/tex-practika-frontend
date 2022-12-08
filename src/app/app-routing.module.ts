import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProductstableComponent } from './productstable/productstable.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { WrapperComponent } from './wrapper/wrapper.component';
import { UsersComponent } from './users/users.component';
import { CreateproductComponent } from './createproduct/createproduct.component';

const routes: Routes = [
  {
    path: '',
    component: WrapperComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'products',
        component: ProductstableComponent,
      },
      {
        path: 'users',
        component: UsersComponent,
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'createproducts',
    component: CreateproductComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
