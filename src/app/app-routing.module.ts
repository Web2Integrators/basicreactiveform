import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customers/customer.component';
import { HomeComponent } from './home/home.component';
import { UsedirectiveComponent } from './directives/usedirective/usedirective.component';


const routes: Routes = [
  {
    path: '' , component: HomeComponent
  },
  {
    path: 'customer' , component : CustomerComponent
  },
  {
    path:'directive' , component : UsedirectiveComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
