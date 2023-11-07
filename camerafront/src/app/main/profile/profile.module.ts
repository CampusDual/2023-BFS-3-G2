import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { ProfileHomeComponent } from './profile-home/profile-home.component';
import { MyproductsHomeComponent } from './myproducts-home/myproducts-home.component';
import { MyproductsDetailComponent } from './myproducts-detail/myproducts-detail.component';
import { MyproductsNewComponent } from './myproducts-new/myproducts-new.component';
import { MyRentalsHomeComponent } from './my-rentals-home/my-rentals-home.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [ProfileHomeComponent,MyproductsHomeComponent, MyproductsDetailComponent, MyproductsNewComponent, MyRentalsHomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    OntimizeWebModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
