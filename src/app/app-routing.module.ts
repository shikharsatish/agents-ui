import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { CompanyListComponent } from './company/company-list/company-list.component';
import { AddCompanyComponent } from './company/add-company/add-company.component';
import { EditCompanyComponent } from './company/edit-company/edit-company.component';


const routes: Routes = [
  {
    path: '', redirectTo: '/landing', pathMatch: 'full'
  },
  {
    path: 'landing', component: LandingComponent

},
{
  path: 'addUser', component: AddUserComponent
},
{
  path: 'companyList/:id', component: CompanyListComponent
},
{
  path: 'add-company', component: AddCompanyComponent
},
{
  path: 'edit-company/:id', component: EditCompanyComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
