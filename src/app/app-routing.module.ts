import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component'
import { CustomersComponent }  from './customers/customers.component';
import { DetailsComponent }  from './details/details.component';
import { HierarchyComponent } from './hierarchy/hierarchy.component';
import { AuthGuard } from './_guards/index';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';




const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'home',
    component:HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'customers',
    component:CustomersComponent,    
    canActivate: [AuthGuard]

  },
  {
    path:'details',
    component:DetailsComponent,
    canActivate: [AuthGuard]

  },
  {
    path:'hierarchy',
    component:HierarchyComponent,
    canActivate: [AuthGuard]
  }
  ,
  {
    path:'customerDetails',
    component:CustomerDetailsComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }