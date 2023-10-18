import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { ProfileHomeComponent } from './profile-home/profile-home.component';


@NgModule({
  declarations: [ProfileHomeComponent],
  imports: [
    CommonModule,
    OntimizeWebModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
