import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileHomeComponent } from './profile-home/profile-home.component';
import { MyproductsHomeComponent } from './myproducts-home/myproducts-home.component';
import { MyproductsDetailComponent } from './myproducts-detail/myproducts-detail.component';


const routes: Routes = [{
  path : 'profile',
  component: ProfileHomeComponent
},
{
  path:'myProducts',
  component: MyproductsHomeComponent
},
{
  path:'myProducts/:id_product',
  component: MyproductsDetailComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
