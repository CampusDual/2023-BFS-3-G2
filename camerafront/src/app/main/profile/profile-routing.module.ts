import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileHomeComponent } from './profile-home/profile-home.component';
import { MyproductsHomeComponent } from './myproducts-home/myproducts-home.component';
import { MyproductsDetailComponent } from './myproducts-detail/myproducts-detail.component';
import { MyproductsNewComponent } from './myproducts-new/myproducts-new.component';
import { MyRentalsHomeComponent } from './my-rentals-home/my-rentals-home.component';
import { MyRentalsConflictDetailsComponent } from './my-rentals-conflict-details/my-rentals-conflict-details.component';


const routes: Routes = [{
  path : 'mydata',
  component: ProfileHomeComponent
},
{
  path:'myProducts',
  component: MyproductsHomeComponent
},
{
  path: "myProducts/new",
  component: MyproductsNewComponent
},
{
  path : 'myRentals',
  component: MyRentalsHomeComponent
},
{
  path : 'myRentals/conf',
  component: MyRentalsConflictDetailsComponent
},
{
  path:'myProducts/:id_product',
  component: MyproductsDetailComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
