import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { AddUserComponent } from './add-user/add-user.component';


const routes: Routes = [
  {
    path: '', redirectTo: '/landing', pathMatch: 'full'
  },
  {
    path: 'landing', component: LandingComponent

},
{
  path: 'addUser', component: AddUserComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
