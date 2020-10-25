import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RetirementComponent } from './retirement/retirement.component'
import { CustomersComponent }  from './customers/customers.component';
import { DetailsComponent }  from './details/details.component';


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
    path:'retirement',
    component:RetirementComponent
  },
  {
    path:'customers',
    component:CustomersComponent
  },
  {
    path:'details',
    component:DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }