import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { ProfileHomeComponent } from './profile-home/profile-home.component';
import { MyproductsHomeComponent } from './myproducts-home/myproducts-home.component';
import { MyproductsDetailComponent } from './myproducts-detail/myproducts-detail.component';


@NgModule({
  declarations: [ProfileHomeComponent,MyproductsHomeComponent, MyproductsDetailComponent],
  imports: [
    CommonModule,
    OntimizeWebModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
