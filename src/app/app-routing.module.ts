import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customers/customer.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: '' , component: HomeComponent
  },
  {
    path: 'customer' , component : CustomerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
